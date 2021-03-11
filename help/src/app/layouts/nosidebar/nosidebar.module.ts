import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosidebarComponent } from './nosidebar.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from 'src/app/pages/login/login.component';



@NgModule({
  declarations: [
    NosidebarComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ]
})
export class NosidebarModule { }
