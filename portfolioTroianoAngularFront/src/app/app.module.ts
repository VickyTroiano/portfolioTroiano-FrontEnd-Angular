import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RedesComponent } from './redes/redes.component';
import { BannerComponent } from './banner/banner.component';
import { BannerContentComponent } from './banner-content/banner-content.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutMePersonalComponent } from './about-me-personal/about-me-personal.component';
import { AboutMeInterestsComponent } from './about-me-interests/about-me-interests.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RedesComponent,
    BannerComponent,
    BannerContentComponent,
    AboutMeComponent,
    AboutMePersonalComponent,
    AboutMeInterestsComponent,
    SkillsComponent,
    EducationComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
