import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {

  nombre: string;
  mail: string | undefined;
  password: string;

  respuestaRe: string | undefined;
  respuestaLogin: string | undefined;

  constructor(public userService: UsuariosService, public router: Router, public authService : AuthService) { }
  
  registro(){
    const user = {nombre: this.nombre, password: this.password, mail: this.mail};
    this.userService.registro(user).subscribe( data => {
      if(data['success'] == true){
        this.respuestaRe = data['message'];
      }else{
        this.respuestaRe = data['message'];
      }
    });
  }

  ngOnInit() {}

}
