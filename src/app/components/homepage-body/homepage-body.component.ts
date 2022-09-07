import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-body',
  templateUrl: './homepage-body.component.html',
  styleUrls: ['./homepage-body.component.css']
})
export class HomepageBodyComponent implements OnInit {
    banner:string = "../images/banner2.jpg";



  constructor() { }

  ngOnInit(): void {
  }

}
