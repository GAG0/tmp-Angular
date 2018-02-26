import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// interface UserResponse {
// id: number;
// FirstName: string;
// LastName: string;
// mail: string;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // statusCode: any;
  // EmployeesService: any;
  // datas: UserResponse;
  // // editedDatas: any = {};
  // // deleteDatas: any = {};
  // object: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

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

        }



