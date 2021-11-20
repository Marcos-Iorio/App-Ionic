import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit { 

 user = new Usuario;

  enable: boolean = true;

  respuestaRe: string | undefined;
  respuestaLogin: string | undefined;

  constructor(public userService: UsuariosService, public router: Router, public authService : AuthService) {}
    
  login(){
      const user = {nombre: this.user.nombre, password: this.user.password};
      this.userService.login(user).subscribe( data => {
        if(data['success'] == false){
          this.router.navigateByUrl('/login')
          this.respuestaLogin = data['message'];
        }else{
          this.respuestaLogin = data['message'];
          this.authService.setLogin(data['jwt'])
          this.router.navigateByUrl('/inicio');
        }
        
      });
    }

    getLogin(){
      if(this.authService.getToken() == true){
        this.router.navigateByUrl('/inicio');
      }else{

      }
    }

  ngOnInit() {}

}
