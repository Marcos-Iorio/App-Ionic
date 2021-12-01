import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/entidades/producto';
import { ProdService } from 'src/app/servicios/prod.service';

@Component({
  selector: 'app-editarprod',
  templateUrl: './editarprod.component.html',
  styleUrls: ['./editarprod.component.scss'],
})
export class EditarprodComponent implements OnInit {

  sub: any | undefined;

  producto = new Producto();


  constructor(private _Activatedroute:ActivatedRoute, public router: Router, public prodService: ProdService) { }

  ngOnInit(): void {
    this.sub = this._Activatedroute.paramMap.subscribe(params => { 
      this.producto.idProd = params.get('id');
    });

    this.obtenerDato();
  }


  modificarProd(){
  
    const producto = {id: this.producto.idProd , nombre: this.producto.nombreProd, stock: this.producto.stock , precio: this.producto.precio}
    this.prodService.EditarProducto(producto).subscribe( data => {
      let datos = Object.values(data);
      if(datos[0] == true){
        console.log(datos['message'])
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
