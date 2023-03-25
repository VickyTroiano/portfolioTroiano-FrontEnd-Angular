//importar modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


//importar los servicios - va en providers
//import { DatosService } from './services/datos.service';

//importar componentes - me los trae solitos angular schematics
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
import { ErrorComponent } from './sections/error/error.component';
import { PruebaNavbarComponent } from './sections/prueba-navbar/prueba-navbar.component';
import { PruebaComponent } from './sections/prueba/prueba.component';
import { VerticalNavbarPanelComponent } from './panelComponents/vertical-navbar-panel/vertical-navbar-panel.component';
import { SocialEditPanelComponent } from './panelComponents/social-edit-panel/social-edit-panel.component';
import { BannerEditPanelComponent } from './panelComponents/banner-edit-panel/banner-edit-panel.component';
import { ProfileEditPanelComponent } from './panelComponents/profile-edit-panel/profile-edit-panel.component';
import { AboutEditPanelComponent } from './panelComponents/about-edit-panel/about-edit-panel.component';
import { PersonalEditPanelComponent } from './panelComponents/personal-edit-panel/personal-edit-panel.component';
import { KnowledgeEditPanelComponent } from './panelComponents/knowledge-edit-panel/knowledge-edit-panel.component';
import { EducationEditPanelComponent } from './panelComponents/education-edit-panel/education-edit-panel.component';
import { ProjectsEditPanelComponent } from './panelComponents/projects-edit-panel/projects-edit-panel.component';




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
    SigninComponent,
    ErrorComponent,
    PruebaNavbarComponent,
    PruebaComponent,
    VerticalNavbarPanelComponent,
    SocialEditPanelComponent,
    BannerEditPanelComponent,
    ProfileEditPanelComponent,
    AboutEditPanelComponent,
    PersonalEditPanelComponent,
    KnowledgeEditPanelComponent,
    EducationEditPanelComponent,
    ProjectsEditPanelComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
