import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

}
