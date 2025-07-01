import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';

import { About } from './about/about';

export const routes: Routes = [
      { path: '', component: LandingPage },  
       { path: 'about', component: About },  
];
