import { Component } from '@angular/core';
import { HeaderComponent } from "../../../layout/pages/header/header.component";
import { FooterComponent } from "../../../layout/pages/footer/footer.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  
}
