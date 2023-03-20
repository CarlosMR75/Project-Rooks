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

  createCheckIn(checkin: CheckinModule): Observable<CheckinModule[]> {
    return this.http.post<CheckinModule[]>(this.URL + '/checkin', checkin);
  }

  getCheckIn() {
    return this.http.get(this.URL + '/checkin');
  }

  getEmployees() {
    return this.http.get(this.URL + '/empleado');
  }

  getOneEmployee(id: String) {
    return this.http.get(`${this.URL}/empleado/IdEmpleado/${id}`);
  }

  getCheckEmployee(id: String) {
    return this.http.get(`${this.URL}/checkin/IdEmpleado/${id}`);
  }

  getAllRoles() {
    return this.http.get(`${this.URL}/rol`);
  }

  saveRol(rol: Rol):Observable<Rol>{
    return this.http.post(`${this.URL}/rol/`,rol);
  }
  
}
