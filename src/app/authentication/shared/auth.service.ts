import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = false;

  constructor() { }

  login(username: string, password: string) {
    if (username === 'marlon' && password === '123') {
      return of(true)
             .pipe(
                tap(val => this.isLogin = val)
             );
    }
    return of(false);
  }
}
