import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './routing/index/index.component';
import { AlbumComponent } from './routing/album/album.component';
import { HeaderComponent } from './components/header/header.component';
import { ComponentsModule } from './components/components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AndreitaComponent } from './routing/andreita/andreita.component';
import { MarcoComponent } from './routing/marco/marco.component';
import { WirComponent } from './routing/wir/wir.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AlbumComponent,
    AndreitaComponent,
    MarcoComponent,
    WirComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
