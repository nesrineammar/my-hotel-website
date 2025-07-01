import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';

import { About } from './about/about';

export const routes: Routes = [
      { path: '', component: LandingPage },  // Page d'accueil
       { path: 'about', component: About },  // Page d'accueil
];
