import { EmployeeComponent } from './components/employee/employee.component';
import { FormsModule } from '@angular/forms';
import { LoginGuard } from './login.guard';
import { OurAppComponent } from './components/our-app/our-app.component';
import { FormComponent } from './components/form/form.component';
import { AppComponent } from './home.component';
import { DisplayComponent } from './components/display/display.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { LoginComponent } from './components/login/login.component';
import { NewsComponent } from './components/news/news.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser/src/browser';

const routes: Routes = [
    { path : '' , redirectTo: 'home', pathMatch: 'full'},
    { path : 'home', component: FormComponent},
    { path: 'input', component: InputComponent},
    { path: 'display', component: DisplayComponent ,
      children: [
        { path : '' , redirectTo: 'login', pathMatch: 'full'},
        { path: 'login', component: LoginComponent},
        { path: 'about', component: OurAppComponent, canActivate: [LoginGuard]},
        { path: 'dashboard', component: DashboardComponent, canActivate: [LoginGuard],
                children: [
                        {path: 'employee', component: EmployeeComponent},
                ]},
        { path: 'news', component: NewsComponent, canActivate: [LoginGuard]},
        { path: 'timeline', component: TimelineComponent, canActivate: [LoginGuard]},
      ]},

  ];

@NgModule({
  imports: [FormsModule,
    RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  providers: [ LoginGuard]
})
export class AppRoutingModule { }
