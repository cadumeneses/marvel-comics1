import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { LayoutModule } from '@angular/cdk/layout'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListHqModule } from './modules/list-hq.module';
import { ModalComponent } from './componentes/modal/modal.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule } from 'src/app/modules/core.module';
import { MapModule } from './modules/map.module';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MapModule,
    FlexLayoutModule,
    LayoutModule,
    NgbModule,
    ListHqModule,
    CoreModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'commics', pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
