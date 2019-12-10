import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuarios: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.usuarios = db.collection('usuarios').valueChanges();
  }

  title = 'Primera Aplicacion';
  show:boolean=true;
  cursos:string[]=['HTML','ANGULAR','PHP']
  animales:Array<any>=[
    {tipo:'Perro',nombre:'Lisa',edad:10},
    {tipo:'Gato',nombre:'Pepon',edad:2},
    {tipo:'Pato',nombre:'TanTan',edad:7}
  ]

}
