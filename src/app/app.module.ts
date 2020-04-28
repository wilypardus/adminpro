
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//RUTAS
import { APP_ROUTES } from './app.routes';
//MODULOS
import { PagesDModule } from './pagesD/pagesD.module';
import { PagesModule } from './pages/pages.module';

//COMPONENTES
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceModule } from './services/service.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { PaginacionComponent } from './pruebas/paginacion/paginacion.component';
import { PaginatePipe } from './pipes/paginate.pipe';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';








@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PaginacionComponent,
    PaginatePipe,



  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesDModule,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
    SharedModule,
    NoopAnimationsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
