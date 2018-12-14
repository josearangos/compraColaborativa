import { Component, OnInit, Input } from '@angular/core';
import dataJson from '../../data/dataJson'

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.less']
})
export class DetalleProductoComponent implements OnInit {
    @Input() product: any; 
    amount: 0
    constructor() {}
    ngOnInit() {
    }

    sendOrder(){
      console.log(this.amount)
    }
}
