import { UserServiceService } from './../../user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  name= 'Profil korisnika';


  constructor(private user: UserServiceService) { }

  ngOnInit() {
this.name = this.user.username;
console.log(this.name);

  }

}
