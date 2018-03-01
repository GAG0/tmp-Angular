import { post } from 'selenium-webdriver/http';
import { Http, Response, Headers } from '@angular/http';
import { Route } from '@angular/compiler/src/core';
import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private http: Http) { }

  // tslint:disable-next-line:no-inferrable-types
  confirmationString: string = 'New employee has been added';
  // tslint:disable-next-line:no-inferrable-types
  isAdded: boolean = false;

  employeeObj: object = {};
  addNewEmployee = function(employee) {
    this.employeeObj = {
      'first_name' : employee.first_name,
      'last_name' : employee.last_name,
      'email' : employee.email,

    };
    this.http.post('http://localhost:3000/employees', this.employeeObj).subscribe((res: Response) => {
      this.isAdded = true;
      console.log(res);

    });
  };
  ngOnInit() {
  }

}
