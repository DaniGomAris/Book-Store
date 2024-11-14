// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Necesario para las directivas de Angular
import { AppComponent } from './app.component'; // Asegúrate de tener el componente principal
import { HeaderComponent } from './layout/pages/header/header.component'; // Ajusta la ruta según tu estructura
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './features/pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, // Esto habilita las directivas como *ngIf
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Define el componente principal como la entrada de la aplicación
})
export class AppModule { }
