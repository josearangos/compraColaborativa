import { Component, OnInit } from '@angular/core';
import routesObject from '../../data/dataJson'

declare var $ :any;

@Component({
  selector: 'app-pincipal',
  templateUrl: './pincipal.component.html',
  styleUrls: ['./pincipal.component.less']
})
export class PincipalComponent implements OnInit {
  products = routesObject.products;
  filteredProducts = [];
  currentFilter:string;
  currentProduct:{};

  constructor() { }

  ngOnInit() {
  	this.filteredProducts = this.products;
  	this.currentFilter = "all"
  	this.currentProduct = this.products[0];
  }

  filterBy(status){
  	this.currentFilter = status;
  	if(status == "all"){
  		this.filteredProducts = this.products;
  	}else{  
	  	this.filteredProducts = this.products.filter(function(product) {
		  return product.status == status;
		});
	}
  }
  setCurrentProduct(product){
  	this.currentProduct = product;
  }
}
