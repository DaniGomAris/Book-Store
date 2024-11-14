// sign-in.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  onLogin(): void {
    this.usuarioService.login(this.email, this.password).subscribe(
      (response) => {
        // Almacena el token o cualquier dato relevante
        localStorage.setItem('token', response.token);
        this.router.navigate(['/home']); // Redirige a la página de inicio después de un login exitoso
      },
      (error) => {
        // Muestra mensaje de error si el login falla
        this.errorMessage = 'Correo o contraseña incorrectos';
        console.error('Error en el login:', error);
      }
    );
  }
}
