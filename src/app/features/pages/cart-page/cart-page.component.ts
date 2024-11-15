import { Component, OnInit } from '@angular/core';
import { CartService } from "../../../services/cart.service"; // Asegúrate de que el path sea correcto
import { FooterComponent } from "../../../layout/pages/footer/footer.component";
import { HeaderComponent } from "../../../layout/pages/header/header.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, RouterLink, CommonModule],
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  carrito: any[] = [];
  total: number = 0; // Propiedad para almacenar el total

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.carrito = this.cartService.obtenerCarrito(); // Cargar productos al iniciar
    this.calcularTotal(); // Calcular el total al iniciar
  }

  // Método para eliminar un libro del carrito
  eliminarDelCarrito(index: number) {
    this.cartService.eliminarDelCarrito(index); // Llamada al servicio para eliminar el libro
    this.carrito = this.cartService.obtenerCarrito(); // Actualizar el carrito
    this.calcularTotal(); // Actualizar el total después de eliminar un libro
  }

  // Método para calcular el total del carrito
  calcularTotal() {
    this.total = this.carrito.reduce((sum, libro) => sum + (libro.precio || 0), 0);
  }

  // Método para proceder al pago
  procederAlPago() {
    // Mostrar alerta
    alert("Redirigiendo a la página de pagos");

    // Vaciar el carrito
    this.cartService.limpiarCarrito(); // Método que limpia el carrito en el servicio
    this.carrito = [];
    this.total = 0
  }
}
