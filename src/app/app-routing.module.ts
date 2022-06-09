import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ViewRecipesComponent } from './components/view-recipes/view-recipes.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RouterGuard } from './guards/router.guard';
import { TokenService } from './services/token.service';
import { SettingsComponent } from './components/settings/settings.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [RouterGuard] },
  { path: 'home', component: HomeComponent, canActivate: [RouterGuard] },
  { path: 'login', component: WelcomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [RouterGuard] },
  { path: 'recipe/:id', component: ViewRecipesComponent, canActivate: [RouterGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [RouterGuard] },
  { path: 'error', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [TokenService]
})
export class AppRoutingModule { }
