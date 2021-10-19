import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './componentes/menu/menu.component';
import { LoginComponent } from './componentes/login/login.component';
import { TiendaComponent } from './componentes/tienda/tienda.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { EditarprodComponent } from './componentes/editarprod/editarprod.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, LoginComponent, TiendaComponent, ProductosComponent, EditarprodComponent, FooterComponent],
  entryComponents: [LoginComponent, TiendaComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule, CommonModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
