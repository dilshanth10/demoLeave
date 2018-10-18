import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Role } from './role.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http:HttpClient) { }

    private roleUrl = "http://localhost:8080/leavesystem/role";

    public getAllRoles(){
      return this.http.get<Role[]>(this.roleUrl);
    }

    public createRole(role){
      return this.http.post<Role>(this.roleUrl, role);
    }

    public deleteRole(role){
      return this.http.delete<Role>(this.roleUrl + "/" +  role.roleId);
    }

    public updateRole(role){
      return this.http.put<Role>(this.roleUrl + "/" + role.roleId, role);
    }
}
