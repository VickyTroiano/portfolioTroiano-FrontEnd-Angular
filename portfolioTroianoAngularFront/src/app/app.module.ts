import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RedesComponent } from './redes/redes.component';
import { BannerComponent } from './banner/banner.component';
import { BannerContentComponent } from './banner-content/banner-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RedesComponent,
    BannerComponent,
    BannerContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
