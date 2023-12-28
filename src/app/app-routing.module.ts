import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/kvadra-id',
    pathMatch: 'full'
  },
  {
    path: 'kvadra-id',
    loadChildren: () => import('./modules/kvadra-id/kvadra-id.module').then(m => m.KvadraIdModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
