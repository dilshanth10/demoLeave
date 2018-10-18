import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { RoleService } from './role.service';
import { AppRoutingModule } from './app-routing.module';
import { DepartmentComponent } from './department/department.component';
import { LeaveComponent } from './leave/leave.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    LeaveComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    RoleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
