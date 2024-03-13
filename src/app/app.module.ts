import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { LoginComponent } from './admin/login/login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { LoginRegistrationComponent } from './user/login-registration/login-registration.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutComponent } from './component/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceComponent } from './component/service/service.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    AdminDashboardComponent,
    LoginRegistrationComponent,
    LandingPageComponent,
    PageNotFoundComponent,
    ContactComponent,
    AboutComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
  ],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
