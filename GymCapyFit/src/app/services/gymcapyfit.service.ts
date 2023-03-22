import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckinModule } from '../models/Checkin.module';
import { Rol } from '../models/Rol';

@Injectable({
  providedIn: 'root'
})
export class GymcapyfitService {
  checkin: CheckinModule[];
  private URL = 'http://localhost:4000/api';
  constructor(private http: HttpClient) { }

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
  
}
