import { ApiService } from './api.service';
import { HttpModule } from '@angular/http';
import { UserServiceService } from './user-service.service';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './home.component';
import { FormComponent } from './components/form/form.component';
import { DisplayComponent } from './components/display/display.component';
import { AppRoutingModule } from './app-routing.module';
import { InputComponent } from './components/input/input.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientXsrfModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewsComponent } from './components/news/news.component';
import { TimelineComponent } from './components//timeline/timeline.component';
import { OurAppComponent } from './components/our-app/our-app.component';
import { LoginGuard } from './login.guard';





@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DisplayComponent,
    InputComponent,
    LoginComponent,
    DashboardComponent,
    NewsComponent,
    TimelineComponent,
    OurAppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    HttpClientXsrfModule,
    ReactiveFormsModule,
    HttpModule
  ],

  providers: [UserServiceService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }



