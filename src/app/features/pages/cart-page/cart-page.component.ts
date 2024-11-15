import { Component, OnInit } from '@angular/core';
import { CartService } from "../../../services/cart.service";
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
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.carrito = this.cartService.obtenerCarrito();
    this.calcularTotal();
  }

  // Método para eliminar un libro del carrito
  eliminarDelCarrito(index: number) {
    this.cartService.eliminarDelCarrito(index);
    this.carrito = this.cartService.obtenerCarrito();
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.carrito.reduce((sum, libro) => sum + (libro.precio || 0), 0);
  }

  procederAlPago() {
    alert("Redirigiendo a la página de pagos");

    this.cartService.limpiarCarrito();
    this.carrito = [];
    this.total = 0
  }
}
