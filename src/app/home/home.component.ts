import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myText: any = "this is my string example";
  myNumber: any = 223332; 
  myDate: any = "2022-02-09 11:30:26";
  constructor() { }

  ngOnInit(): void {
  }

}
