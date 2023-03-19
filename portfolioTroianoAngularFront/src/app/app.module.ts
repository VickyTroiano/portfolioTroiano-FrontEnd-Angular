import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sections/navbarComponents/navbar/navbar.component';
import { RedesComponent } from './sections/navbarComponents/redes/redes.component';
import { BannerComponent } from './sections/bannerComponents/banner/banner.component';
import { BannerContentComponent } from './sections/bannerComponents/banner-content/banner-content.component';
import { AboutMeComponent } from './sections/aboutMeComponents/about-me/about-me.component';
import { AboutMePersonalComponent } from './sections/aboutMeComponents/about-me-personal/about-me-personal.component';
import { AboutMeInterestsComponent } from './sections/aboutMeComponents/about-me-interests/about-me-interests.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { EducationComponent } from './sections/education/education.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ContactComponent } from './sections/contact/contact.component';
import { FooterComponent } from './sections/footer/footer.component';
import { PanelComponent } from './panelComponents/panel/panel.component';
import { IndexComponent } from './index/index.component';
import { NavbarPanelComponent } from './panelComponents/navbar-panel/navbar-panel.component';
import { ButtonLoginComponent } from './sections/button-login/button-login.component';
import { LoginComponent } from './login/login.component';
import { ButtonLogoutComponent } from './panelComponents/button-logout/button-logout.component';
import { SigninComponent } from './signin/signin.component';



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
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    PanelComponent,
    IndexComponent,
    NavbarPanelComponent,
    ButtonLoginComponent,
    LoginComponent,
    ButtonLogoutComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
