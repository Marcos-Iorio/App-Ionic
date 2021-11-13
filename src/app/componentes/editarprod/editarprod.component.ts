import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdService } from 'src/app/servicios/prod.service';

@Component({
  selector: 'app-editarprod',
  templateUrl: './editarprod.component.html',
  styleUrls: ['./editarprod.component.scss'],
})
export class EditarprodComponent implements OnInit {

  sub: any | undefined;

  //Datos nuevos
  nombreProd: string | undefined;
  stock: number | undefined
  precio: number | undefined

  producto = new Productos();


  constructor(private _Activatedroute:ActivatedRoute, public router: Router, public prodService: ProdService) { }

  ngOnInit(): void {
    this.sub = this._Activatedroute.paramMap.subscribe(params => { 
      this.producto.idProd = params.get('id');
    });

    this.obtenerDato();
  }


  modificarProd(){
    this.producto.nombreProd = this.nombreProd;
    this.producto.stock = this.stock;
    this.producto.precio = this.precio;
    
    const producto = {id: this.producto.idProd , nombre: this.producto.nombreProd, stock: this.producto.stock , precio: this.producto.precio}
    console.log(producto)
    this.prodService.EditarProducto(producto).subscribe( data => {
      let datos = Object.values(data);
      if(datos[0] == true){
        this.router.navigateByUrl('/tienda');
      }else{
        console.log("false")
      }
    });
  }

  obtenerDato(){
    const id = {prodId: this.producto.idProd}
    this.prodService.getProductInfo(id).subscribe(data => {
      let datos = Object.values(data);
      this.producto.nombreProd = datos[0].nombre_prod;
      this.producto.precio = datos[0].precio;
      this.producto.stock = datos[0].stock;
    })
  }

}

class Productos {
  idProd: any | undefined;
  nombreProd: string | undefined;
  stock: number | string;
  precio: number | string;
}
