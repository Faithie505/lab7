import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//clas designed to be used by other classes
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  //we initialise the constructor with a http client object, and this occurs during runtime
  constructor(private httpClient: HttpClient) { }

  getMovieData():Observable<any>{
    //returns the data from the api as an observable list
    return this.httpClient.get("http://www.omdbapi.com/?apikey=2ee2ed84&s=%27war%27");
  }


}
