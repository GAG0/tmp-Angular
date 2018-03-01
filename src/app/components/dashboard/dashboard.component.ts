import { Router, RouterModule } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { post } from 'selenium-webdriver/http';
import { Observable } from 'rxjs/Observable';

import { Employees } from './employees';
import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { parse } from 'url';
import { findIndex } from 'lodash';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  router: any;
  route: any;
  constructor(private http: Http) { }

  id: number;
  data: object = {};
  employee = [];
  employeeObj: object = {};
  private headers = new Headers ({'Content-Type' : 'application/json'});

  employees = [];

  fetchData = function() {
    this.http.get('http://localhost:3000/employees').subscribe(
      (res: Response) => {
        this.employees = res.json();
        console.log(this.employees, 'lista objekata APIja');

      },
      (err: HttpErrorResponse) => {
              if (err.error instanceof Error) {
        console.log('Client-side Error occured');

              }else {
                console.log('Server-side Error occured');

              }
      });
  };

  deleteEmployee = function(id) {
    if (confirm('Are you sure?')) {
      const url = `${'http://localhost:3000/employees'}/${id}`;
      return this.http.delete(url, {headers: this.headers}).toPromise()
      .then(() => {
        this.fetchData();
      });
    }

  };

updateEmployee(employee) {
  this.employeeObj = {
    'first_name' : employee.first_name,
    'last_name' : employee.last_name,
    'email' : employee.email
  };
  const url = `${'http://localhost:3000/employees'}/${this.id}`;
  this.http.put( url, JSON.stringify(this.employeeObj), {headers: this.headers})
  .toPromise()
  .then(() => {
    this.router.navigate(['/']);
  // tslint:disable-next-line:semicolon
  }
} 

  ngOnInit() {

this.fetchData();

this.route.params.subscribe(params => {
this.id = +params['id'];
});
 this.http.get('http://localhost:3000/employees').subscribe(
    (res: Response) => {
      this.employees = res.json();
      console.log(this.employees, 'lista objekata APIja');
      for (let i = 0; i < this.employee.length; i++) {
        // tslint:disable-next-line:radix
        if (parseInt(this.employee[i].id) === this.id) {
          this.data = this.employee[i];
          break;
        }
      }

    });

  }













//     const req = this.http.post('httpss://localhost:3000/employees', {
//       FirstName: 'Dragan',
//       LastName : 'Krivokuca',
//       mail: 'dragan@gmail.com'
//     })
//     .subscribe(
//       res => {
//         console.log(res);
//       },
//       err => {
//         console.log('Error occured');

//       });

// const reqq = this.http.get<UserResponse>('http://localhost:3000/employees').subscribe(datas => {
//   this.datas = datas;
//      console.log(datas);
//      },
//      (err: HttpErrorResponse) => {
//       if (err.error instanceof Error) {
//         console.log('Client-side Error occured');

//       }else {
//         console.log('Server-side Error occured');

//       }
//     });


        }



