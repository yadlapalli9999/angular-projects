import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Featured} from './featured';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FeaturedService {
  private featuredUrl:string = '../../assets/Api/featured_shows.json';
  constructor(private _http:HttpClient) { }

  featuredShows():Observable<Featured[]>{
   return this._http.get<Featured[]>(this.featuredUrl)
  }
}
