import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pago",
  templateUrl: "./pago.component.html",
  styleUrls: ["./pago.component.css"]
})
export class PagoComponent implements OnInit {
  constructor() {}

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


  cards=[
    "",
    "",
    "",
    "",
  ]



  returnFieldFromObject(item) {
    // item represent one object in above data array.
    // you can return any field that will be use to populate drop-down
    return item.place[0].value;
  }
  // Selected object
  selectedObject(item) {
    // do something with selected item (object)
    console.log(item);
  }
}
