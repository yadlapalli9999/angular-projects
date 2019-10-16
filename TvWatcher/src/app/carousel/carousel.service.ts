import { Injectable } from '@angular/core';
import {Carousel} from './carousel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  private carouselUrl:string = '../../assets/Api/carousel_items.json'
  constructor(private _http:HttpClient) { }

  getfeatured():Observable<Carousel[]>{
   return this._http.get<Carousel[]>(this.carouselUrl);
  }
}
