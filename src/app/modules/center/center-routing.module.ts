import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CenterComponent } from './center.component';



const routes: Routes = [
  {
    path: '',
    component: CenterComponent,
    children: [
      {
        path: 'forum',
        loadChildren: () => import('./modules/forum/forum.module').then(m => m.ForumModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CenterRoutingModule {}
