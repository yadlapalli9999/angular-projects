import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import {Products} from './products'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  prodList = []
  productForm:boolean = false;
  isNewForm:boolean;
  newProduct:any = {};

  constructor(private prodService:ProductsService) { }

  ngOnInit() {
    this.getProductsList();
  }
  
  getProductsList(){
    this.prodList =  this.prodService.getProducts();
  }

  showEditProductForm(products:Products){
    if(!products){
      this.productForm = false;
      return
    }
    this.productForm = true;
    this.isNewForm = false;
    this.newProduct = products;
  }

  showAddProductForm(){
    if(this.prodList.length){
      this.newProduct = {}
    }
    this.productForm = true;
    this.isNewForm = true;
  }
}
