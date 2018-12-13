import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarjetaProductoCompradoComponent } from './componentes//tarjeta-producto-comprado/tarjeta-producto-comprado.component'
import { TarjetaProductoMetaCumplidaComponent } from './componentes/tarjeta-producto-meta-cumplida/tarjeta-producto-meta-cumplida.component'
import { TarjetaProductoInicialComponent } from './componentes/tarjeta-producto-inicial/tarjeta-producto-inicial.component'
import { TarjetaProductoParticipandoComponent } from './componentes/tarjeta-producto-participando/tarjeta-producto-participando.component'
import { CarritoCompraComponent } from './paginas/carrito-compra/carrito-compra.component'
import { PagoComponent } from './paginas/pago/pago.component'

const routes: Routes = [
  { path: 'pago', component:  PagoComponent },
  { path: 'producto-comprado', component: TarjetaProductoCompradoComponent },
  { path: 'meta-cumplida', component: TarjetaProductoMetaCumplidaComponent },
  { path: 'producto-inicial', component: TarjetaProductoInicialComponent },
  { path: 'producto-participando', component: TarjetaProductoParticipandoComponent },
  { path: 'carrito-compra', component: CarritoCompraComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
