import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-pago",
  templateUrl: "./pago.component.html",
  styleUrls: ["./pago.component.css"]
})
export class PagoComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit() {}

  

  placeholder = "Direccion";
  valorAPagar = 152.52;
  data = [
    {
      place: [
        {
          value: "Carrera 50 # 60-39 Medellín"
        }
      ]
    },
    {
      place: [
        {
          value: "Carrera 3, Cali, Valle del Cauca"
        }
      ]
    },
    {
      place: [
        {
          value: "Carrera 3 #21 46 Bogotá colombia"
        }
      ]
    }
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





  pagar() {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }
}
