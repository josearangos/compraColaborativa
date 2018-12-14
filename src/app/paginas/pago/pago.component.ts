import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { CardsService } from "./../../servicios/cards.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import dataJson from "../../data/dataJson";

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
    private activatedRoute: ActivatedRoute,
    private route: Router
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
      card_number: Math.floor(Math.random() * 10000000000),
      cardTransaction_amount: this.valorAPagar,
      cardTransaction_concept: localStorage.getItem("concepto"),
      cardTransaction_currency: "COP",
      cardTransaction_date: Date.now(),
      cardTransaction_id: Math.floor(Math.random() * 10000000000),
      cardTransaction_valueDate: Date.now(),
      cardsId: this.payForm.value.card
    };

    this.cardsService.transaction(transactionModel).subscribe(
      data => {
        ///Exito
        for (const iterator of dataJson.products) {
          if (localStorage.getItem("payId") == iterator.id) {
            iterator.status = "review";
            iterator.status_code = 1;
            break;
          }
        }
        localStorage.setItem(
          "products",
          JSON.stringify({
            user: { isActive: true, name: "" },
            products: dataJson.products
          })
        );
        $(".btnsucces").click();
        this.spinner.hide();
        this.route.navigateByUrl("/");
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
