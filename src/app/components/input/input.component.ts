import { post } from 'selenium-webdriver/http';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';



@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',

  styleUrls: ['./input.component.css']
})


export class InputComponent implements OnInit {



  rForm: FormGroup;
  post:any;
  name:string = '';
  mail:string = '';
  phone:string = '';
  description:string = '';
  titleAlert:string = 'It`s is required';

  constructor(private fb: FormBuilder) {

    this.rForm = fb.group({
      'name': [null, Validators.required],
      'mail': [null, Validators.required],
      'phone': [null, Validators.required],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      'validate' : ''
    });

  }

  ngOnInit() {

    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate === '1') {
          this.rForm.get('name').setValidators([Validators.required, Validators.minLength(5)]); // content
          this.titleAlert = 'You need to specify at least 5 characters';
        } else {
          this.rForm.get('name').setValidators(Validators.required);
        }
        this.rForm.get('name').updateValueAndValidity();
      }
    );
  }

  addPost(post) {
    this.description = post.description;
    this.name = post.name;
    this.mail = post.mail;
    this.phone = post.phone;
  }

}
