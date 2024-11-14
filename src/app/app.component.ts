import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './features/pages/home/home.component';
import { CartPageComponent } from './features/pages/cart-page/cart-page.component';
import { EmpresaPageComponent } from './features/pages/empresa-page/empresa-page.component';
import { ContactoPageComponent } from './features/pages/contacto-page/contacto-page.component';
import { HeaderComponent } from './layout/pages/header/header.component';

@Component({
  selector: 'app-root',
  //standalone: true,
  imports: [RouterOutlet,
            HeaderComponent,
            HeaderComponent,
            ContactoPageComponent,
            EmpresaPageComponent,
            CartPageComponent,
            HomeComponent
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BookStore';
}
