import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../../layout/pages/header/header.component";
import { FooterComponent } from "../../../layout/pages/footer/footer.component";
import { RouterModule } from '@angular/router';
import { LibroService } from "../../../services/libro.service";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  libros: any[] = [];
  generos: string[] = ['accion', 'ficcion', 'misterio', 'ciencia_ficcion', 'fantasia', 'biografia', 'romantica', 'historia', 'desarrollo_personal'];
  precios: number[] = [];

  constructor(private libroService: LibroService) { }

  ngOnInit() {
    const generoAleatorio = this.generos[Math.floor(Math.random() * this.generos.length)];
  
    this.libroService.buscarLibros(generoAleatorio).subscribe((response: any) => {
      this.libros = response.docs.slice(0, 30);
  
      this.precios = this.libros.map(() => Math.floor(Math.random() * (100 - 5 + 1)) + 5);
    });
  }
}
