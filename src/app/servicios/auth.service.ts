import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticated$ = new BehaviorSubject(false);

  public setLogin(jwt: any){
    localStorage.setItem('token', jwt)
    this.authenticated$.next(true)
  }

  public logOut(){
    localStorage.removeItem('token');
    this.authenticated$.next(false);
    window.location.href = "/login";
  }

  public getToken(){
     if(localStorage.getItem('token')){
       return true;
     }else{
       return false;
     }
  }

  constructor() { }
}
