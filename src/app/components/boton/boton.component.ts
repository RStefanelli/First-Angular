import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  public clase: String;

  constructor() {
  	this.clase = '';
  }

  ngOnInit() {
  }

  meClickearon() {
  	this.clase = 'hola';
  	console.log('click!');
  	console.log(this.clase)
  }

}
 