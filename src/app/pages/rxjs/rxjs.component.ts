import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry,map,filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscripcion: Subscription;


  constructor() {



    this.subscripcion =this.regresaObservable().pipe(
      retry(2)
    )
    .subscribe(
      numero=>console.log('Subs',numero),
      error=>console.error('Error',error),
      ()=>console.log('El observador ha terminado')
      );


  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.subscripcion.unsubscribe();
  }

  regresaObservable():Observable<any>{

    return  new Observable((observer:Subscriber<any>)=>{
      let contador=0;

      const intervalo=setInterval(()=>{

        contador++;
        const salida={
          valor:contador
        }
        observer.next( salida );
        // if(contador===3){
        //   observer.complete();
        // }
        // if(contador===2){
          // // clearInterval(intervalo);
          // observer.error('Auxilio');
        // }

      },1000)
    }).pipe(
      map( resp=>resp.valor),
      filter( (valor,index)=>{
        if(valor%2 ===1){
            return true;
        }else{
          return false
        }
      })

      )

  }


}
