import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module';

import { LayoutPageComponent } from './page/layout-page/layout-page.component';
import { LoginPageComponent } from './page/login-page/login-page.component';

@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AuthRoutingModule,
  ]
})
export class AuthModule {}
