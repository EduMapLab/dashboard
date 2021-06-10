import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { UserModel as User } from 'src/app/shared/models/user.model';

@Injectable({ providedIn: 'root' })

export class AuthenticationService {


  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') || ''));
      this.currentUser = this.currentUserSubject.asObservable();
    
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string, bind: object) {
    return this.http.post<any>(`${environment.apiUrl}/api/auth`, { username, password, bind })
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  bind(username: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/api/checkout-auth`, { username, password });
  }

  register(username: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/api/user/register/`, { username, password });
  }

  ForgotPassword(email: string) {
    return this.http.post<any>(`${environment.apiUrl}/api/users/forgot-password/`, { email });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    // this.currentUserSubject.next(null);
  }
}
