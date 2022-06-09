import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  API_BASE: string = "http://localhost:8080/oauth2/authorization/"
  REDIRECT: string = "?redirect_uri=http://localhost:4200/login";
  githubURI: string = this.API_BASE + "github" + this.REDIRECT;
  googleURI: string = this.API_BASE + "google" + this.REDIRECT;
  error: string;
  
  googleLogin(){
    window.location.href = this.googleURI;
  }

  githubLogin(){
    window.location.href = this.githubURI;
  }


  constructor( @Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit(): void {
    this.error = this.data ? this.data.error : null;
   }

}
