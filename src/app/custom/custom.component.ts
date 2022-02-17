import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {
  myText: any = "this is my string example";
  myNumber: any = 223332; 
  myDate: any = "2015-06-15 16:03:01";
  constructor() { }

  ngOnInit(): void {
  }

}
