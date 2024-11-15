import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LibroService } from '../../../services/libro.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  libros: any[] = [];
  tituloBusqueda: string = '';
  resultadosVisible: boolean = false;  // Variable para controlar la visibilidad de los resultados de búsqueda

  constructor(private libroService: LibroService) {}

  buscarLibros(): void {
    if (this.tituloBusqueda.trim()) {
      this.libroService.buscarLibros(this.tituloBusqueda).subscribe(response => {
        this.libros = response.docs;
        this.resultadosVisible = this.libros.length > 0;  // Mostrar los resultados si existen
      });
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    const searchBar = document.querySelector('.search-bar');
    const resultados = document.querySelector('.resultados-libros');
    
    // Verifica si el clic fue fuera de la barra de búsqueda y los resultados
    if (searchBar && !searchBar.contains(event.target as Node) && resultados && !resultados.contains(event.target as Node)) {
      this.resultadosVisible = false;  // Oculta los resultados
    }
  }
}
