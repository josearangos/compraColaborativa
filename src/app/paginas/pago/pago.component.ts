import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { CardsService } from "./../../servicios/cards.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
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
    this.payForm = new FormGroup({
      card: new FormControl(null, [Validators.required])
    });
    this.valorAPagar = localStorage.getItem("pay");

    this.token();
  }

  payForm: FormGroup;

  arrayCards: any;
  placeholder = "Direccion";
  valorAPagar: any;
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
    //this.spinner.show();
    const transactionModel = {
      card_number: this.payForm.value.card,
      cardTransaction_amount: this.valorAPagar,
      cardTransaction_concept: localStorage.getItem("concepto"),
      cardTransaction_currency: "COP",
      cardTransaction_date: Date.now(),
      cardTransaction_id: Math.floor(Math.random() * 9),
      cardTransaction_valueDate: "2018-05-06 ",
      cardsId: this.payForm.value.card
    };

    /*this.cardsService.transaction(this.transactionModel).subscribe(
      data => {
        ///Exito
        $(".btnsucces").click();
        this.spinner.hide();
      },
      error => {
        $(".btnerror").click();

        this.spinner.hide();
      }
    );*/
  }

  token() {
    this.activatedRoute.queryParams.subscribe(params => {
      const codeApp = params["code"];
      this.cardsService.token(codeApp).subscribe(
        data => {
          const token = data["access_token"];
          console.log(token);
          this.cardsService.cards(token).subscribe(data => {
            this.arrayCards = data["data"];
          });

          this.spinner.hide();
        },
        error => {
          console.log(error);
        }
      );
    });
  }
}
