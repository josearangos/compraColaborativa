import { Component, OnInit, Input } from '@angular/core';
import routesObject from '../../data/dataJson';

@Component({
  selector: 'app-tarjeta-producto-meta-cumplida',
  templateUrl: './tarjeta-producto-meta-cumplida.component.html',
  styleUrls: ['./tarjeta-producto-meta-cumplida.component.scss']
})
export class TarjetaProductoMetaCumplidaComponent implements OnInit {
  @Input() product = routesObject.products[0];

  constructor() { }

  ngOnInit() {
  }

}
