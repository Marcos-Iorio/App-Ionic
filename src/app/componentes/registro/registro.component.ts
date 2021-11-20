import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {

   user = new Usuario;

  respuestaRe: string | undefined;
  respuestaLogin: string | undefined;

  constructor(public userService: UsuariosService, public router: Router, public authService : AuthService) { }
  
  registro(){
    const user = {nombre: this.user.nombre, password: this.user.password, mail: this.user.mail};
    console.log(user);
    this.userService.registro(user).subscribe( data => {
      if(data['success'] == true){
        this.respuestaRe = data['message'];
        this.router.navigateByUrl('/inicio');
      }else{
        this.respuestaRe = data['message'];
      }
    });
  }

  ngOnInit() {}

} 
