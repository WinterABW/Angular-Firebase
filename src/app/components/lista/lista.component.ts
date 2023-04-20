import { Component, OnInit } from '@angular/core';
import { ConexionService, Item } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  items: any;
  editarItem:any={
    name:''
  }

  constructor(private servicio: ConexionService) {
    this.servicio.listaItem().subscribe((item) => {
      this.items = item;
      console.log(this.items);
    });
  }
  ngOnInit(): void {}

  eliminar(id:string){
    this.servicio.delete(id)
  }

  editar(item:Item){
    this.editarItem=item
  }

  agregarItemEditado(){
    this.servicio.editar(this.editarItem)
  }

}
