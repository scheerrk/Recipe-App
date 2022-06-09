import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { SearchDialogComponent } from '../search-dialog/search-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  opened=false;

  constructor(public dialog: MatDialog, public tokenService:TokenService, public router: Router) { }
  ngOnInit(): void {
  }
  
  openSearchDialog() {
    const dialogRef = this.dialog.open(SearchDialogComponent);
  }

  logout() {
    this.tokenService.signOut();
    this.router.navigateByUrl("/login");
  }

  menuOpened(){ this.opened = true}
  menuClosed(){ this.opened = false}
 
}
