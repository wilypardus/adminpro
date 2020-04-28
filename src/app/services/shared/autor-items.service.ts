import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from './../../config/config';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AutorItemsService {
usuario:Usuario
  constructor(public http:HttpClient, public _usuarioService:UsuarioService) { }

  getItems(desde:number=0){
    let url=URL_SERVICIOS+'/item?desde='+desde;
    return this.http.get(url);


  }
  getItemsAutor(id:string){

    let url=URL_SERVICIOS+'/busqueda/coleccion/iautores/'+id;
    return this.http.get(url);


  }
}
