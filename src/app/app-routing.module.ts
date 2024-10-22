import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/center',
    pathMatch: 'full'
  },
  {
    path: 'center',
    loadChildren: () => import('./modules/center/center.module').then(m => m.CenterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
