import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {AuthService  } from '../service/auth';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  
  styles: [
  ]
})
export class login implements OnInit  {
     user=new User();
     erreur: number = 0;
 constructor( private authservice :AuthService ,
               private router: Router ) { }
 ngOnInit():void{

 }
 onLoggedin() {
    console.log(this.user);

    let isValidUser: Boolean = this.authservice.SignIn(this.user);

     if (isValidUser) {
      this.router.navigate(['/cours']); // redirection après login
    } else {
      this.erreur = 1; // afficher message d'erreur
    }
  }

    

}