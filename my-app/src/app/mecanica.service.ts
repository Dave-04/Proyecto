import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item { name: string; last: string; email: string; passw: string;  }

@Injectable({
  providedIn: 'root'
})

export class MecanicaService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  mecanica: any [] = [
    {
      sensor: '1',
      especialidad: 'Peso',
      descripcion: 'Un sensor en la industria es un objeto capaz de variar una propiedad ante magnitudes físicas o químicas, llamadas variables de instrumentación, y transformarlas con un transductor en variables eléctricas.'
    },
    {
      sensor: '2',
      especialidad: 'Distancia',
      descripcion: 'Un sensor en la industria es un objeto capaz de variar una propiedad ante magnitudes físicas o químicas, llamadas variables de instrumentación, y transformarlas con un transductor en variables eléctricas.'
    }
  ]

  constructor(private afs: AngularFirestore) { 
    this.itemsCollection = afs.collection<Item>('usuarios');
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    
    console.log('funcionando servicio')
  }  
  listaItem(){
    return this.items;
  }
  agregarItem(item: Item) {
    this.itemsCollection.add(item);
  }
  obtenerMecanica(){
    return this.mecanica;
  }
  obtenerUno(i){
    return this.mecanica[i];
  }
}
