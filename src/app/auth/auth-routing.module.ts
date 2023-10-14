import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutPageComponent } from './page/layout-page/layout-page.component';
import { LoginPageComponent } from './page/login-page/login-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'login', component: LoginPageComponent },
      { path: '**',    redirectTo: 'login' }
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ],
})
export class AuthRoutingModule { }
