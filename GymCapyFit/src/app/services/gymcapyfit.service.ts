import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckinModule } from '../models/Checkin.module';
import { Rol } from '../models/Rol';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GymcapyfitService {
  checkin: CheckinModule[];
  private URL = 'http://localhost:4000/api';
  constructor(private http: HttpClient, private router:Router) { }

  getAllCheckIn(): Observable<CheckinModule[]> {
    return this.http.get<CheckinModule[]>(this.URL + '/checkin');
  }

  createCheckIn(checkin) {
    return this.http.post<any>(this.URL + '/checkin/', checkin);
  }

  reviewCheckIn(idEmpleado, fecha) {
    return this.http.get(this.URL + '/checkin/reviewChecks/' + idEmpleado + '/' + fecha);
  }

  getCheckIn() {
    return this.http.get(this.URL + '/checkin');
  }

  getEmployees() {
    return this.http.get(this.URL + '/empleado');
  }

  getOneEmployee(id: String) {
    return this.http.get(`${this.URL}/empleado/${id}`);
  }

  saveEmployye(newEmp) {
    return this.http.post<any>(`${this.URL}/empleado/signup`,newEmp);
  }

  getCheckEmployee(id: String) {
    return this.http.get(`${this.URL}/checkin/${id}`);
  }

  getAllRoles() {
    return this.http.get(`${this.URL}/rol`);
  }

  saveRol(rol){
    return this.http.post<any>(`http://localhost:4000/api/rol`,rol);
  }
  
  deleteRol(nameRol: String){
    return this.http.delete<any>(`http://localhost:4000/api/rol/${nameRol}`);
  }

  //JUANPA AQUÏ ABAJO PONGA TODO LO QUE OCUPE PARA LLEVR UN CONTROL
  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }

}
