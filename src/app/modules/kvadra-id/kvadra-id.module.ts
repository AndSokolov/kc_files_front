import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KvadraIdRoutingModule } from './kvadra-id-routing.module';
import { KvadraIdComponent } from './kvadra-id.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainContainerComponent } from './components/main-container/main-container.component';


@NgModule({
  declarations: [
    KvadraIdComponent,
    SidebarComponent,
    MainContainerComponent
  ],
  imports: [
    CommonModule,
    KvadraIdRoutingModule
  ]
})
export class KvadraIdModule { }
