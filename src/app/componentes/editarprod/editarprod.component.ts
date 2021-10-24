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
  idProd: any | undefined;
  nombreProd: string | undefined;
  stock: number | undefined
  precio: number | undefined

  constructor(private _Activatedroute:ActivatedRoute, public router: Router, public prodService: ProdService) { }

  ngOnInit(): void {
    this.sub = this._Activatedroute.paramMap.subscribe(params => { 
      this.idProd = params.get('id');
    });
  }
  modificarProd(){
    const producto = {id: this.idProd, nombre: this.nombreProd, stock:this.stock, precio: this.precio}
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

}
