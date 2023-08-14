import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

// top headline API
topHeadlinesNews='https://newsapi.org/v2/top-headlines?country=in&apiKey=bcf8f0bf9b464e428f0e9d14d0beafad';
// for tech API

techNews='https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=bcf8f0bf9b464e428f0e9d14d0beafad';

// for business API
bussinessNews='https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=bcf8f0bf9b464e428f0e9d14d0beafad';

// for sport API
sportNews='https://newsapi.org/v2/top-headlines?country=in&category=sport&apiKey=bcf8f0bf9b464e428f0e9d14d0beafad';

// for Entertainment API
entertainNews='https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=bcf8f0bf9b464e428f0e9d14d0beafad';

// for entertain Method

enterNews():Observable<any>{
  return this.http.get(this.entertainNews)
}
// for sport method
 spNews():Observable<any>{
  return this.http.get(this.sportNews);
 }

// for business methods
buzzNews():Observable<any>{
  return this.http.get(this.bussinessNews);
}

// for tech methods
tcTechNews():Observable<any>{
  return this.http.get(this.techNews);
  }


  // for headlines methods
topHeadlines():Observable<any>{
return this.http.get(this.topHeadlinesNews);
}
}
