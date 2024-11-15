// usuario.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  // Se asegura de que el servicio esté disponible globalmente
})
export class UsuarioService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Iniciar sesión
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/login`, { email, password });
  }

  // Registrar un nuevo usuario
  register(nombre: string, email: string, password: string): Observable<any> {
    const userData = { nombre, email, password };
    return this.http.post(`${this.apiUrl}/user/create`, userData);
  }

  // Actualizar el usuario
  updateUser(nombre: string, email: string, fecha_nacimiento: string, token: string): Observable<any> {
    const headers = { 'Authorization': `Bearer ${token}` };
    return this.http.post(`${this.apiUrl}/update`, { nombre, email, fecha_nacimiento }, { headers });
  }

  // Guardar la sesión del usuario en el LocalStorage
  setSession(userData: any): void {
    localStorage.setItem('user', JSON.stringify(userData));
  }

  // Cerrar sesión
  logout(): void {
    const user = JSON.parse(localStorage.getItem('user')!);
    if (user) {
      user.isLoggedIn = false;
      localStorage.setItem('user', JSON.stringify(user));
    }
  }
  

  // Verificar si el usuario está logueado
  isLoggedIn(): boolean {
    return localStorage.getItem('user') !== null;
  }

  // Obtener el nombre del usuario logueado
  getUsername(): string | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user).nombre : null;
  }
}
