import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { LeaveComponent } from './leave/leave.component';

const routes: Routes = [
  { path: 'department', component: DepartmentComponent },
  { path: 'leave', component: LeaveComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
