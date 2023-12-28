import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KvadraIdComponent } from './kvadra-id.component';

const routes: Routes = [
  {
    path: '',
    component: KvadraIdComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KvadraIdRoutingModule { }
