import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public users: any[];


  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.http.get('https://randomuser.me/api/?results=100').subscribe((res: any) => {
      this.users = res.results;
    })
  }

}
