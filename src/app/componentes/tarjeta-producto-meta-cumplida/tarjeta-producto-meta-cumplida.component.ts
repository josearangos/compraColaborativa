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
    window.location.href = "https://sbapi.bancolombia.com/hackathon/v1/security/oauth-otp/oauth2/authorize?client_id=92d5af2c-e6c1-49e5-8135-7abc3c970d03&response_type=code&scope=Card-credit:read:user&redirect_uri=http://localhost:4200/pago";
  }

  offer() {}
  increaseOffer() {}
  review() {}

  convertMyValue(product) {
    const value = (product.myAmount * 100) / product.minimunAmount;
    return value.toString() + '%';
  }
  convertCurrentValue(product) {
    const value = (product.currentTotalAmount * 100) / product.minimunAmount;
    return value.toString() + '%';
  }


}
