import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHqComponent } from 'src/app/pages/list-hq/list-hq.component';
import { RouterModule } from '@angular/router';
import { ComicComponent } from 'src/app/pages/comic/comic/comic.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListHqComponent,
    ComicComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path:'commics', component: ListHqComponent
      }
    ])
  ]
})
export class ListHqModule { }
