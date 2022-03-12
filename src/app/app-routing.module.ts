import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LoginComponent} from './login/login.component'
import { AboutusComponent } from './aboutus/aboutus.component';
import { ConContactusComponent } from './con-contactus/con-contactus.component';
const routes: Routes = [ {
  path: 'login',
  component: LoginComponent
  },
{
  path:'aboutus',
  component:AboutusComponent
},
{
path:'Contactus',
component:ConContactusComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
