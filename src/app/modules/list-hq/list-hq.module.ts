import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHqComponent } from 'src/app/pages/list-hq/list-hq.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListHqComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'commics', component: ListHqComponent
      }
    ])
  ]
})
export class ListHqModule { }
