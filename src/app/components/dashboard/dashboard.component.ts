import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface UserResponse {
id: number;
name: string;
username: string;
mail: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  datas: UserResponse;
  // editedDatas: any = {};
  // deleteDatas: any = {};
  object: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    const req = this.http.post('https://jsonplaceholder.typicode.com/posts', {
      name: 'ime',
      username : 'korisnicko ime',
      mail: 'mejl'
    })
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log('Error occured');

      });

const reqq = this.http.get<UserResponse>('http://jsonplaceholder.typicode.com/users').subscribe(datas => {
  this.datas = datas;
     console.log(datas);
     },
     (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('Client-side Error occured');

      }else {
        console.log('Server-side Error occured');

      }
    };

      }

        }



