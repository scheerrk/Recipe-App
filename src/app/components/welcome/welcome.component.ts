import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {


  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  currentUser: any;

  constructor(
    public router: Router,
    private route: ActivatedRoute, 
    private tokenService: TokenService, 
    private userService: UserService,
    public dialog: MatDialog
  ) {
   }

  
  ngOnInit(): void {

    this.router.events.subscribe(() => {
      this.dialog.closeAll();
    })

    const config = new MatDialogConfig();
    config.disableClose = true;
    config.panelClass = "panelStyle"
    config.closeOnNavigation = true;

    const token: string = this.route.snapshot.queryParamMap.get('token');
    const error: string = this.route.snapshot.queryParamMap.get('error');
    if (this.tokenService.getToken()) {
      if (this.tokenService.getUser().username != null){
        this.router.navigate(["/home"]);
      } else {
        this.dialog.open(RegisterComponent, config);
      }
    }
    else if(token){
      this.tokenService.saveToken(token);
      this.userService.getCurrentUser().subscribe((data: any) => {
        this.currentUser = data;
        this.tokenService.saveUser(data);
        if (!data.enabled){
          this.dialog.open(RegisterComponent, config);
        } else {
          this.router.navigate(["/home"]);
        }
      })
    }
    else if(error){
        config.data = {error: error};
        this.dialog.open(LoginComponent, config);
    } 
    else {
      this.dialog.open(LoginComponent, config);
    }
  }

};
