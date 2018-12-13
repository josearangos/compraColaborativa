import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.css']
})
export class CarritoCompraComponent implements OnInit {
  productos: any; // por el momento
  constructor() { }

  ngOnInit() {
  }

}
