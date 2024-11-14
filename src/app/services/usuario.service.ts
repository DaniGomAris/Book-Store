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

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/login`, { email, password });
  }

  register(nombre: string, email: string, password: string): Observable<any> {
    const userData = { nombre, email, password };
    return this.http.post(`${this.apiUrl}/user/create`, userData);
  }

  updateUser(nombre: string, email: string, fecha_nacimiento: string, token: string): Observable<any> {
    const headers = { 'Authorization': `Bearer ${token}` };
    return this.http.post(`${this.apiUrl}/update`, { nombre, email, fecha_nacimiento }, { headers });
  }

}
