import { Routes } from '@angular/router';
import { Login } from './login/login';
import { authGuard } from './auth-guard';
import { LandingPage } from './landing-page/landing-page';



export const routes: Routes = [
      { path: '', component:LandingPage},
      {path: 'about',
    loadChildren: () => import('../app/about/about-module').then(m => m.AboutModule),
canActivate:[authGuard]},
   { path:'login', component:Login }
];
