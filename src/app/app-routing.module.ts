import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { LoginComponent } from './admin/login/login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutComponent } from './component/about/about.component';
import { LoginRegistrationComponent } from './user/login-registration/login-registration.component';
import { ServiceComponent } from './component/service/service.component';
import { userGuard } from './user/user.guard';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'contact',title:'Contact',component:ContactComponent},
  {path:'service',title:'Service',component:ServiceComponent},
  {path:'about',title:'About Us',component:AboutComponent},
  {path:'login-registration',title:'Login Registration',component:LoginRegistrationComponent},
  {path:'dashboard',title:'User Dashboard',component:DashboardComponent,canActivate:[userGuard]},
  {path:'admin-login',title:'Admin',component:LoginComponent},
  {path:'admin-dashboard',title:'Admin Dashboard',component:AdminDashboardComponent},
  {path:'**',title:'Page Not Found',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
