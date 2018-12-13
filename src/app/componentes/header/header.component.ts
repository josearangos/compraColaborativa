import { Component, OnInit } from '@angular/core';
import routesObject from '../../data/dataJson';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  estaLogueado(){
    return routesObject.user.isActive;
  }

  login(){
    routesObject.user.isActive = true;
  }
}
