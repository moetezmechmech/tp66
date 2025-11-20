import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: User[] = [{
    "username": "admin", "password": "123", "roles": ['ADMIN'],
    email: '',
    enabled: false
  },
                   {
                     "username": "nadhem", "password": "123", "roles": ['USER'],
                     email: '',
                     enabled: false
                   } ];
  public loggedUser!:string;
  public isloggedin: Boolean = false;
  public roles!:string[];

 constructor(private router:Router){}

    logout() {
       this.isloggedin = false;
       this.loggedUser = undefined!;
       this.roles = undefined!;
       localStorage.removeItem('loggedUser');
       localStorage.setItem('isloggedin' ,String(this.isloggedin));
        this.router.navigate(['/login']);
  }


    SignIn(user: User): Boolean {
    let validUser: Boolean = false;
    this.users.forEach((curUser) => {
      if (user.username == curUser.username && user.password == curUser.password) {
        validUser = true;
        this.loggedUser = curUser.username;
        this.isloggedin = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isloggedin', String(this.isloggedin));
      }
    });
    return validUser;
  }
  setLoggedUserFromLocalStorage(login: string) {
    this.loggedUser = login;
    this.isloggedin = true;
    this.getUserRoles(login);
  }
  getUserRoles(username:String){
    this.users.forEach((curUser) =>{
      if(curUser.username==username){
        this.roles=curUser.roles
      }
    })
  }

  isAdmin():Boolean{
    if (!this.roles) //this.roles== undefiened
       return false;
    return (this.roles.indexOf('ADMIN') >-1) ;
    
  } 
   
}