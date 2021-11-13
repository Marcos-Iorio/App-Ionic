import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from '../servicios/auth.service'

@Injectable({
  providedIn: 'root'
})
export class GuardAuthService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(){
    //Si el usuario no está logeado no lo dejo acceder y lo devuelve a la home
    if(!this.authService.getToken()){
        console.log("No estás logeado");
        this.router.navigate(['/inicio'])
        return false;
    }
    return true;
  }

}


