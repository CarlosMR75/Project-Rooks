import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { GymcapyfitService } from 'src/app/services/gymcapyfit.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private capyfit:GymcapyfitService) { }

  intercept(req, next) {
    const tokenizeReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer ${this.capyfit.getToken()}'
      }
    })
    return next.handle(tokenizeReq);
  }
}
