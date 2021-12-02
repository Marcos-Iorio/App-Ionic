import { Component, OnInit} from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/entidades/producto';
import { ProdService } from 'src/app/servicios/prod.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {

  @Input() productos = new Producto();

  valorProd: string | undefined;

  constructor(public prodService : ProdService, public router: Router) {
  }

  borrarProducto(value: any){
    this.valorProd = value;
    const prodId = {prodId: this.valorProd}
    console.log(prodId);
    this.prodService.BorrarProducto(prodId).subscribe( data => {
      let datos = Object.values(data);
      if(datos[0] == true){
        window.location.reload();
      }else{
        console.log("false")
      }
    });
  }

  ngOnInit() {}

}


