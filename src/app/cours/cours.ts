import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Cours } from '../model/cours.model';
import { CoursService } from '../service/cours.service';
import { RouterLink } from '@angular/router';
import { AuthService } from '../service/auth';

@Component({
  selector: 'app-cours',
  imports: [CommonModule,RouterLink],
  standalone: true,
  templateUrl: './cours.html',
})
export class CoursComponent implements OnInit {
  courss : Cours[];
  constructor(private coursService : CoursService, public authservice :AuthService ,){
    this.courss=coursService.listCours()
  }
 ngOnInit(): void {
   
 }
 supprimerCours(cours : Cours) : void{
  this.coursService.supprimerCours(cours);
 }
 
}
