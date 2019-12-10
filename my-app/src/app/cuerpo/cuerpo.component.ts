import { Component, OnInit } from '@angular/core';
import { MecanicaService } from '../mecanica.service';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {

  items:any;
  itema:any={
    email:'',
    last:'',
    name:'',
    passw:''
  }
  constructor(private mecanica:MecanicaService) {
    this.mecanica.listaItem().subscribe(item=>{
      this.items = item;
    })
   }

  ngOnInit() {
  }
  agregar(){
    this.mecanica.agregarItem(this.itema);
    this.itema.email = '';
    this.itema.passw = '';
    this.itema.name = '';
    this.itema.last = '';
  }

}
