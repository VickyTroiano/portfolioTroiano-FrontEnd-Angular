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
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { PanelComponent } from './panel/panel.component';
import { IndexComponent } from './index/index.component';
import { NavbarPanelComponent } from './navbar-panel/navbar-panel.component';
import { ButtonLoginComponent } from './button-login/button-login.component';
import { LoginComponent } from './login/login.component';
import { ButtonLogoutComponent } from './button-logout/button-logout.component';
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
