import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styles: []
})
export class HomePageComponent implements OnInit {
  homePage: string = "./../../../assets/img/home.png";
  constructor() {}

  ngOnInit() {}
}
