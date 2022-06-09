import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../services/token.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class RouterGuard implements CanActivate {

  activeUser$: any;
  constructor(
    private userService: UserService,
    private tokenService: TokenService,
    public router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    if (environment.production) {
      const token = this.tokenService.getToken();
      if (!token) {
        this.router.navigateByUrl("/login");
        return false;
      } else {

        this.userService.getCurrentUser().subscribe((data: any) => {
          if (!data.enabled) {
            this.router.navigateByUrl("/login");
            return false;
          } else {
            return true;
          }
        })
      }
    }
    return true;
  }

}
