import { Component, OnInit } from '@angular/core';
import { ProdService } from 'src/app/servicios/prod.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss'],
})
export class TiendaComponent implements OnInit {
  categorias: any[] = [];

  filtros: string = '0';

  productos: Array<any> = [];

  constructor(public prodService : ProdService) {}

  obtenerCategorias(){
    this.prodService.obtenerCategorias().subscribe(data =>{
      this.categorias = Object.values(data);
    });
  }
 
  obtenerProductos(event : any){
    this.filtros = event.target.value;
    const prod = {categoria : this.filtros};
    let url = "https://edi-iorio-back.herokuapp.com/productos/prodCat"
    this.prodService.productos(prod, url).subscribe( data => {
      this.productos = Object.values(data);
    });
  }

  obtenerTodosProds(){
    const prod = {categoria : '0'};
    let url = "https://edi-iorio-back.herokuapp.com/productos/todos"
    this.prodService.productos(prod, url).subscribe( data => {
      this.productos = Object.values(data);
    });
  }
  

  ngOnInit(): void {
    this.obtenerCategorias();
    this.obtenerTodosProds();

  }



}
