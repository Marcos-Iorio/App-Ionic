import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EditarprodComponent } from './componentes/editarprod/editarprod.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { TiendaComponent } from './componentes/tienda/tienda.component';
import { GuardAuthService } from './servicios/guard-auth.service';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {path: "login", component: LoginComponent},
  {path: "registro", component: RegistroComponent},
  {path: "tienda", component: TiendaComponent, canActivate: [GuardAuthService]},
  {path: "tienda/editar/:id", component: EditarprodComponent, canActivate: [GuardAuthService]},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
