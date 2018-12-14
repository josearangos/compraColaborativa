import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { StarRatingModule } from "angular-star-rating";
import { AppComponent } from "./app.component";
import { TarjetaProductoInicialComponent } from "./componentes/tarjeta-producto-inicial/tarjeta-producto-inicial.component";
import { TarjetaProductoParticipandoComponent } from "./componentes/tarjeta-producto-participando/tarjeta-producto-participando.component";
import { TarjetaProductoMetaCumplidaComponent } from "./componentes/tarjeta-producto-meta-cumplida/tarjeta-producto-meta-cumplida.component";
import { TarjetaProductoCompradoComponent } from "./componentes/tarjeta-producto-comprado/tarjeta-producto-comprado.component";
import { DetalleProductoComponent } from "./componentes/detalle-producto/detalle-producto.component";
import { CarritoCompraComponent } from "./paginas/carrito-compra/carrito-compra.component";
import { PagoComponent } from "./paginas/pago/pago.component";
import { HeaderComponent } from "./componentes/header/header.component";
import { FooterComponent } from "./componentes/footer/footer.component";
import { PincipalComponent } from "./paginas/pincipal/pincipal.component";
import { NgSimpleAutocompleteModule } from "ng-simple-autocomplete2";
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule } from "@angular/common/http";
import { SweetAlert2Module } from "@toverux/ngx-sweetalert2";
import { CardsService } from "./servicios/cards.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
  declarations: [
    AppComponent,
    TarjetaProductoInicialComponent,
    TarjetaProductoParticipandoComponent,
    TarjetaProductoMetaCumplidaComponent,
    TarjetaProductoCompradoComponent,
    DetalleProductoComponent,
    CarritoCompraComponent,
    PagoComponent,
    HeaderComponent,
    FooterComponent,
    PincipalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    NgxSpinnerModule,
    NgSimpleAutocompleteModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTooltipModule
  ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
