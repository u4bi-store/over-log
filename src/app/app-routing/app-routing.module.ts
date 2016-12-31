import { RouterModule, Routes } from '@angular/router';

import{ MainComponent } from '../main/main.component';
import { ViewOverlogComponent } from '../view-overlog/view-overlog.component';

const routes: Routes =[
  {path: '', component: MainComponent },
  {path: 'search/:tag/:num', component: ViewOverlogComponent }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
