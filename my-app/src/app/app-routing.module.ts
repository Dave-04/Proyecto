import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { Cuerpo2Component } from './cuerpo2/cuerpo2.component';
import { SensoresComponent } from './sensores/sensores.component';

const routes: Routes = [
  { path: 'contacto', component: ContactoComponent },
  { path: 'cuerpo', component: CuerpoComponent },
  { path: 'cuerpo2', component: Cuerpo2Component },
  { path: 'sensores/:id', component: SensoresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
