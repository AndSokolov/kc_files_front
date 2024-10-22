import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CenterRoutingModule } from './center-routing.module';
import { CenterComponent } from './center.component';


@NgModule({
  declarations: [
    CenterComponent
  ],
  imports: [
    CommonModule,
    CenterRoutingModule,
  ]
})
export class CenterModule {

}
