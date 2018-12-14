import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { CardsService } from "./../../servicios/cards.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

declare var jquery: any;
declare var $: any;

@Component({
  selector: "app-pago",
  templateUrl: "./pago.component.html",
  styleUrls: ["./pago.component.css"]
})
export class PagoComponent implements OnInit {
  constructor(
    private spinner: NgxSpinnerService,
    private cardsService: CardsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.token();
  }

  placeholder = "Direccion";
  valorAPagar = 152.52;
  transactionModel = {
    card_number: "1234567890123457",
    cardTransaction_amount: "77777",
    cardTransaction_concept: "Compra compartida x2",
    cardTransaction_currency: "COP",
    cardTransaction_date: "2018-09-21",
    cardTransaction_id: "12345687",
    cardTransaction_valueDate: "2018-05-06 ",
    cardsId: "1234567890123457"
  };
  data = [
    { place: [{ value: "Carrera 50 # 60-39 Medellín" }] },
    { place: [{ value: "Carrera 3, Cali, Valle del Cauca" }] },
    { place: [{ value: "Carrera 3 #21 46 Bogotá colombia" }] }
  ];
  cards = ["", "", "", ""];

  returnFieldFromObject(item) {
    return item.place[0].value;
  }
  // Selected object
  selectedObject(item) {
    // do something with selected item (object)
    console.log(item);
  }

  pagarr() {
    this.spinner.show();
    this.cardsService.transaction(this.transactionModel).subscribe(
      data => {
        ///Exito
        $(".btnsucces").click();
        this.spinner.hide();
      },
      error => {
        $(".btnerror").click();

        this.spinner.hide();
      }
    );
  }

  token() {
    this.activatedRoute.queryParams.subscribe(params => {
      const codeApp = params["code"];
      this.cardsService.token(codeApp).subscribe(
        data => {},
        error => {
          console.log(error);
        }
      );
    });
  }
}
