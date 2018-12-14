import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-producto-meta-cumplida',
  templateUrl: './tarjeta-producto-meta-cumplida.component.html',
  styleUrls: ['./tarjeta-producto-meta-cumplida.component.scss']
})
export class TarjetaProductoMetaCumplidaComponent implements OnInit {
  @Input() product: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  pay(e) {
    e.stopPropagation();
    let intPrice = parseInt(this.product.price.replace('.',''),10);
    let total = intPrice * this.product.myAmount;
    localStorage.setItem('pay',JSON.stringify(total));
    localStorage.setItem('concepto',"Compra Compartida - "+this.product.myAmount+' '+this.product.name);
    localStorage.setItem('payId',this.product.id);
    window.location.href = "https://sbapi.bancolombia.com/hackathon/v1/security/oauth-otp/oauth2/authorize?client_id=92d5af2c-e6c1-49e5-8135-7abc3c970d03&response_type=code&scope=Card-credit:read:user&redirect_uri=http://localhost:4200/pago";
  }

  offer() {}
  increaseOffer() {}
  review() {}

  convertMyValue(product) {
    let value = (product.myAmount * 100) / product.minimunAmount;
    value = value > 100 ? 100 : value;
    value = value < 0 ? 0 : value;
    return value.toString() + '%';
  }
  convertCurrentValue(product) {
    let value = (product.currentTotalAmount * 100) / product.minimunAmount;
    value = value > 100 ? 100 : value;
    value = value < 0 ? 0 : value;
    return value.toString() + '%';
  }


}
