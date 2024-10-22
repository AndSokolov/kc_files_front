import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForumRoutingModule } from './forum-routing.module';
import { ForumComponent } from './forum.component';

@NgModule({
  declarations: [
    ForumComponent,
  ],
  imports: [
    CommonModule,
    ForumRoutingModule,
  ]
})
export class ForumModule {}
