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
    pay() {
      let intPrice = parseInt(this.product.price.replace('.',''),10);
      let total = intPrice * this.product.myAmount;
      localStorage.setItem('pay',JSON.stringify(total));
      localStorage.setItem('concepto',"Compra Compartida - "+this.product.myAmount+' '+this.product.name);
      localStorage.setItem('payId',this.product.id);

      window.location.href = "https://sbapi.bancolombia.com/hackathon/v1/security/oauth-otp/oauth2/authorize?client_id=92d5af2c-e6c1-49e5-8135-7abc3c970d03&response_type=code&scope=Card-credit:read:user&redirect_uri=http://localhost:4200/pago";
    }

    sendOrder(){
      let aux = 0;
      for (const iterator of dataJson.products) {
        if(this.product["id"] == iterator.id){
          aux = parseInt($('#amountProducto').val(),10) - iterator.myAmount;
          iterator.currentTotalAmount += aux;
          iterator.myAmount = parseInt($('#amountProducto').val(),10);
          iterator.status = "offer";
          iterator.status_code = 3;
          if(iterator.currentTotalAmount >= iterator.minimunAmount){
            iterator.status = "pay";
            iterator.status_code = 2;
          }
          break;
        }
      }
      localStorage.setItem('products',JSON.stringify({"user":{"isActive":true,"name":""},products:dataJson.products}));
      $(".btnsucces").click();
      $('.detallesModal').modal('hide');
    } 

}
