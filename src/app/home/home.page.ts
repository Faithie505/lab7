import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie.service';
import { CommonModule } from '@angular/common';
//IMPORT CARD from angular/standalone
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'], 
  //adding card imports to import folder
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle],
})
export class HomePage implements OnInit{
  //intantiating an any array called movies - this will store the data from the api in an arrau
  myMovies: any[] = [];
  //constructor that takes in a movie service variable
  constructor(private movieService: MovieService) {}

  //this occurs when the progran runs
  ngOnInit(): void {
    //the subscribe ensures that this happens asynchronously - everything occurs at the same time
    this.movieService.getMovieData().subscribe(
      (data) => {
        console.log(data);
        //puts the data from Search (in the api) into the myMovies array
        this.myMovies = data.Search;
      } //callback function
    );
  }
}
