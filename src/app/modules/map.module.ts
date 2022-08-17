import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicMapsComponent } from '../pages/comic-maps/comic-maps.component';
import { HttpClientJsonpModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

@NgModule({
  declarations: [
    ComicMapsComponent
  ],
  imports: [
    CommonModule,
    HttpClientJsonpModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiY2FkdW1lbmVzZXMiLCJhIjoiY2w2eGxqNGI2Mm0xcDNkb2R5d2xrZDF2cCJ9.aFmYV2S71C1fXlx1YpQxMA'
    }),
    RouterModule.forChild([
      {
        path: 'maps', component: ComicMapsComponent
      }
    ])
  ],
  exports: [
    ComicMapsComponent
  ]
})
export class MapModule { }
