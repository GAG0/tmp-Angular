import { UserServiceService } from './../../user-service.service';
import { Form } from './../input/input';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Command } from 'selenium-webdriver';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

login(form: NgForm) {
console.log(form.value);

if (form.value.username === 'admin' && form.value.password === 'admin') {
  localStorage.setItem('username', form.value.email);
  this.router.navigate(['/display/about']);
  }
}

logout() {
localStorage.removeItem('username');
this.router.navigate(['']);
}

}

