import { Component } from '@angular/core';
import { RoleService } from './role.service';
import { Role } from './role.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoLeave';

  roles: Role[];

  roleObj = new Role(3,'Manager');

  msg:any;
  

  constructor(private roleService:RoleService){}

  ngOnInit(){
    this.getRole();
  }

  getRole(){
    this.roleService.getAllRoles().subscribe(data=>{
      this.roles = data;
      console.log(data);
    });
  }

  createRole(){
    // alert("Test");
    this.roleService.createRole(this.roleObj).subscribe(data=>{
      console.log(data);
      // alert("role created");
      this.msg="Data created successfully";
      this.getRole();
    });
  }

  deleteRole(role){
    console.log(role);
    this.roleService.deleteRole(role).subscribe(data=>{
      // alert("role deleted");
      this.msg="Data deleted successfully";
      this.getRole();
    });
  }

  updateRole(){
    this.roleService.updateRole(this.roleObj).subscribe(data=>{
      console.log(data);
      this.msg="Data updated successfully";
      this.getRole();
    })
  }

  editRole(role){
    this.roleObj = Object.assign({},role);
  }
}
