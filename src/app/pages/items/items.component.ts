import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/shared/item.service';
import { Item } from '../../models/item.model';
import { BrowserModule } from '@angular/platform-browser';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { FormControl } from '@angular/forms';
import { FiltrosService } from '../../services/shared/filtros.service';




@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styles: [
  ]
})
export class ItemsComponent implements OnInit {
usuario:Usuario []=[];
items:Item[]=[];
desde:number=0;
totalRegistros:number=0;
limite;
ordenar;

  constructor(
    public _itemsService:ItemService,
    public _usuarioService:UsuarioService,
    public _filtrosService:FiltrosService,
    ) {
    this.limite= this._filtrosService.limitesItem[0];
    this.ordenar= this._filtrosService.ordenar[0];

    }

  ngOnInit(): void {
    this.getItems(this.limite,this.desde);
    console.log(this.usuario);
  }

cambiarLimite(){
    this.items=[];
    this._itemsService.getItems(this.limite,this.desde).subscribe((resp:any)=>{
    this.totalRegistros=resp.total;
    this.items=resp.items;
    this.usuario=resp.items.usuario;
    console.log(this.limite);

      })

}


//OBTENER ITEMS
getItems(limite:number,desde:number){

  this._itemsService.getItems(limite,desde).subscribe((resp:any)=>{
    console.log(resp);
    this.totalRegistros=resp.total;
    this.items=resp.items;
    this.usuario=resp.items.usuario;

      })
}


}
