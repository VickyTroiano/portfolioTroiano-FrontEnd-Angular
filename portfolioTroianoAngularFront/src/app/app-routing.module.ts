import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'signin', component:SigninComponent},
  {path: 'index', component:IndexComponent},
  {path: 'panel', component:PanelComponent},
  {path: '', redirectTo: '/index', pathMatch: 'full'}
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
