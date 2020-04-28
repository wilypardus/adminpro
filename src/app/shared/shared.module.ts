import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { DashboardMenuComponent } from './dashboard-menu/dashboard-menu.component';




@NgModule({
  imports:[RouterModule,CommonModule],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    DashboardMenuComponent,
    NopagefoundComponent,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    DashboardMenuComponent,
    NopagefoundComponent,

  ],
  providers: [],
})
export class SharedModule {}
