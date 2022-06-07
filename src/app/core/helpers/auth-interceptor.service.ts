import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

// 1st solution
const TOKEN_HEADER_KEY = 'Authorization'; // for Spring Boot back-end

/**
 * Class adding authentification information to every client request
 */
@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authservice: AuthService) {
    console.log('value inside constructor');
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(
      'value of token inside intercept' + this.authservice.getToken()
    );

    let token = '' + this.authservice.getToken();
    if (typeof token === 'string' && token.trim().length != 0) {
      var request = req.clone({
        setHeaders: {
          // Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjY2NAZ21haWwuY29tIiwiZXhwIjoxNjU0NzYxNTAwLCJpYXQiOjE2NTQ2NDE1MDB9.50h1WJsPQf1zAQjyiaG9EcWhhZ3411hjsTORXzMLhOs`,
          Authorization: `Bearer ${this.authservice.getToken()}`,
        },
      });

      return next.handle(request).pipe(
        catchError((err) => {
          if (err instanceof HttpErrorResponse && err.status === 401) {
            this.authservice.signOut();
          }
          return throwError(err);
        })
      );
    }
    return next.handle(req);
  }
}
