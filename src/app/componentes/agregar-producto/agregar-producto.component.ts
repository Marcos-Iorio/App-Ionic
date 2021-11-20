import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/entidades/producto';
import { ProdService } from 'src/app/servicios/prod.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.scss'],
})
export class AgregarProductoComponent implements OnInit {

  prod = new Producto();

  constructor(private _Activatedroute: ActivatedRoute, public router: Router, public prodService: ProdService) {}

  agregarProd(){
  
    const producto = {nombre: this.prod.nombreProd,categoria: this.prod.categoria, stock: this.prod.stock , precio: this.prod.precio}
    console.log(producto)
    this.prodService.agregarProducto(producto).subscribe( data => {
      let datos = Object.values(data);
      if(datos[0] == true){
        console.log(datos[1])
        this.router.navigateByUrl('/tienda');
      }else{
        console.log(datos[1])
      }
    });
  }

  ngOnInit() {}

}


