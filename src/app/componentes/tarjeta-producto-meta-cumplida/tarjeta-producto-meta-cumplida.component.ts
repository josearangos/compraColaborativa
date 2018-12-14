import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-producto-meta-cumplida',
  templateUrl: './tarjeta-producto-meta-cumplida.component.html',
  styleUrls: ['./tarjeta-producto-meta-cumplida.component.scss']
})
export class TarjetaProductoMetaCumplidaComponent implements OnInit {
  @Input() product: any; 

  constructor() { }

  ngOnInit() {
  }
  pay(e){
	  e.stopPropagation();
  }

}
