import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './service/auth';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
[x: string]: any;
  protected readonly title = signal('cours2');
  constructor( public authservice :AuthService ,private router:Router){}

 ngOnInit() {
    let isloggedin: string | null;
    let loggedUser: string | null;
    isloggedin = localStorage.getItem('isloggedin');
    loggedUser = localStorage.getItem('loggedUser');
    if (isloggedin !== 'true' || !loggedUser) {
      this.router.navigate(['/login']);
    } else {
      this.authservice.setLoggedUserFromLocalStorage(loggedUser);
    }

  }
  

  onLogout(){
    this.authservice.logout();
   }
}
