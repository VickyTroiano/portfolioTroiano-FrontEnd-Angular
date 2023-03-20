import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panelComponents/panel/panel.component';
import { SigninComponent } from './signin/signin.component';
import { ErrorComponent } from './sections/error/error.component';
import { PruebaComponent } from './sections/prueba/prueba.component';

const routes: Routes = [
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: 'index', component:IndexComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signin', component:SigninComponent},
  {path: 'panel', component:PanelComponent},
  {path: 'prueba', component:PruebaComponent},
  {path: '**', component:ErrorComponent}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
