import { Component } from '@angular/core';
import { FooterComponent } from "../../../layout/pages/footer/footer.component";
import { HeaderComponent } from "../../../layout/pages/header/header.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, RouterLink],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {

}
