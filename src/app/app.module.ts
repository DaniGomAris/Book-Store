// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Necesario para las directivas de Angular
import { AppComponent } from './app.component'; // Asegúrate de tener el componente principal

@NgModule({
  declarations: [
    AppComponent, // Declara el componente principal aquí
  ],
  imports: [
    BrowserModule, // Esto habilita las directivas como *ngIf
  ],
  providers: [],
  bootstrap: [AppComponent] // Define el componente principal como la entrada de la aplicación
})
export class AppModule { }
