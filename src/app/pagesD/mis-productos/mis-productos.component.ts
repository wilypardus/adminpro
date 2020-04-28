import { Component, OnInit } from '@angular/core';
import { AutorItemsService } from '../../services/shared/autor-items.service';
import { Item } from '../../models/item.model';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../models/usuario.model';


@Component({
  selector: 'app-mis-productos',
  templateUrl: './mis-productos.component.html',
  styles: [
  ]
})
export class MisProductosComponent implements OnInit {

  public id="5ea1b395f3adb10113a6c402";
  items:Item[]=[];
  desde:number=0;
  totalRegistros:number=0;
  usuario:Usuario;
  constructor(public _autorItemsService:AutorItemsService, public _usuarioService:UsuarioService) { }

  ngOnInit(): void {

    this._autorItemsService.getItemsAutor(this.id).subscribe((resp:any)=>{

      this.totalRegistros=resp.tabla.length;
      this.items=resp.tabla;
      this.usuario=resp.tabla.usuario;
      console.log(this.totalRegistros);
      console.log(this.items);
  })


}
}
