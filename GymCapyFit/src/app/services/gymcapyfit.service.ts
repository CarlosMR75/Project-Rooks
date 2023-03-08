import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckinModule } from '../models/Checkin.module';

@Injectable({
  providedIn: 'root'
})
export class GymcapyfitService {
  checkin: CheckinModule[];
  private URL = 'http://localhost:3000/api';
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
  
}
