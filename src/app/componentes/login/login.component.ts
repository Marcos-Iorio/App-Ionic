import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  nombre: string;
  mail: string | undefined;
  password: string;

  respuestaRe: string | undefined;
  respuestaLogin: string | undefined;

  constructor(public userService: UsuariosService, public router: Router, public authService : AuthService) {
    this.nombre = "";
    this.password = "";
   }
    
  login(){
      const user = {nombre: this.nombre, password: this.password};
      
      console.log(user);
      this.userService.login(user).subscribe( data => {
        console.log(data);
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
