import { Component, OnInit, Input } from '@angular/core';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.less']
})
export class DetalleProductoComponent implements OnInit {
  	@Input() product: any; 
    constructor() {}
    ngOnInit() {
    }
}
