import { Component, OnInit } from '@angular/core';
import {MecanicaService} from './../mecanica.service'

@Component({
  selector: 'app-cuerpo2',
  templateUrl: './cuerpo2.component.html',
  styleUrls: ['./cuerpo2.component.css']
})
export class Cuerpo2Component implements OnInit {

  mecanica:any[] = [];
  constructor(private _servicio:MecanicaService) { 
    this.mecanica = _servicio.obtenerMecanica();
  }

  ngOnInit() {
  }

}
