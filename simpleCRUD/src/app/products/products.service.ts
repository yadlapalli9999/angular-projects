import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http:HttpClient) { }

  products= [
    {
    "id": 1,
    "name": "Product001",
    "description":"product001 is good",
    "price":200
    },
    {
    "id": 2,
    "name": "Product002",
    "description":"product002 is good",
    "price":200
    },   
    {
    "id": 3,
    "name": "Product003",
    "description":"product003 is good",
    "price":200   
    },
    {
    "id": 4,
    "name": "Product004",
    "description":"product004 is good",
    "price":200
    }
];

getProducts(){
  return this.products;
}
}
