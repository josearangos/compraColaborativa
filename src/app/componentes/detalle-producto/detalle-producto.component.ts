import { Component, OnInit, Input,   OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
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
    totalPrice:string; 
    constructor() {}
    ngOnInit() {
      this.totalPrice = "";
      this.updatePrice();
    }
    ngOnChanges() {
      this.updatePrice();
    }
    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    updatePrice(){
      let intPrice = parseInt(this.product.price.replace('.',''),10);
      let total;
        total = intPrice * this.product.myAmount;
      if(this.product.status == "offer" || this.product.status == "no-offer"){
        total = intPrice * parseInt($('#amountProducto').val(),10); 
      }
      if(isNaN(total)){
        total = 0;
      }
      this.totalPrice = "$"+this.numberWithCommas(total);
    }
    sendOrder(){
      let aux = 0;
      for (const iterator of dataJson.products) {
        if(this.product["id"] == iterator.id){
          aux = parseInt($('#amountProducto').val(),10) - iterator.myAmount;
          iterator.currentTotalAmount += aux;
          iterator.myAmount = parseInt($('#amountProducto').val(),10);
          iterator.status = "offer";
        }
      }
      $(".btnsucces").click();
      $('.detallesModal').modal('hide');
    }
}
