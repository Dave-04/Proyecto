import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MecanicaService} from './../mecanica.service'

@Component({
  selector: 'app-sensores',
  templateUrl: './sensores.component.html',
  styleUrls: ['./sensores.component.css']
})
export class SensoresComponent implements OnInit {

  mecanica:any[] = [];

  constructor(
    private ruta:ActivatedRoute,
    private _servicio:MecanicaService
  ) 
  {
    this.ruta.params.subscribe(params=>{
      console.log(params['id'])
      this.mecanica = this._servicio.obtenerUno(params['id'])
    })
   }

  ngOnInit() {
  }

}
