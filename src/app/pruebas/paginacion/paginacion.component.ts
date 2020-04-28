import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/shared/item.service';
import { Item } from '../../models/item.model';
import {PageEvent} from '@angular/material/paginator';


@Component({
  selector: 'app-paginacion',
  templateUrl: './paginacion.component.html',
  styles: [
  ]
})
export class PaginacionComponent implements OnInit {
items:Item[]=[];
length = 100;
page_size:number=10;
page_number:number = 1;
pageSizeOptions: number[] = [5, 10, 25, 100];


  constructor( public _itemsService:ItemService) { }

  ngOnInit(): void {
    this.getItems();
  }


  getItems(){

    this._itemsService.getItemsT().subscribe((resp:any)=>{
      console.log(resp);

      this.items=resp.items;
      console.log(this.items);


        })
  }
  handlePage(e:PageEvent){
    this.page_size=e.pageSize
    this.page_number=e.pageIndex+1
  }
}
