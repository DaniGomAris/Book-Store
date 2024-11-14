import { Component } from '@angular/core';
import { HeaderComponent } from "../../../layout/pages/header/header.component";
import { FooterComponent } from "../../../layout/pages/footer/footer.component";
import { RouterModule } from '@angular/router';
import { LibroService } from '../../../services/libro.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  libros: any[] = [];
  tituloBusqueda: string = '';
  constructor(private libroService: LibroService) {}

  // Método para buscar libros usando el servicio
  buscarLibros(): void {
    if (this.tituloBusqueda.trim()) {
      this.libroService.buscarLibros(this.tituloBusqueda).subscribe(response => {
        this.libros = response.docs;  // Guardamos los resultados en la variable `libros`
      });
    }
  }
}
