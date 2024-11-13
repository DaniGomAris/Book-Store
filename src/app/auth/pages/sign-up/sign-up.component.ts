import { Component } from '@angular/core';
import { FooterComponent } from "../../../layout/pages/footer/footer.component";
import { HeaderComponent } from "../../../layout/pages/header/header.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

}
