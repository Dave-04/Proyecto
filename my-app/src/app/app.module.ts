import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

//servicios
import {MecanicaService} from './mecanica.service'

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { Cuerpo2Component } from './cuerpo2/cuerpo2.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AppRoutingModule } from './app-routing.module';
import { SensoresComponent } from './sensores/sensores.component';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    FooterComponent,
    CuerpoComponent,
    Cuerpo2Component,
    ContactoComponent,
    SensoresComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [
    MecanicaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
