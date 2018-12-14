import { Component, OnInit } from '@angular/core';
import routesObject from '../../data/dataJson'

@Component({
  selector: 'app-pincipal',
  templateUrl: './pincipal.component.html',
  styleUrls: ['./pincipal.component.less']
})
export class PincipalComponent implements OnInit {
	products = routesObject.products;
  
  constructor() { }

  ngOnInit() {
  }


}
