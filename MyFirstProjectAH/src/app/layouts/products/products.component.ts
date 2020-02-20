import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styles: []
})
export class ProductsComponent implements OnInit {
  prodName = "Mobiles";
  constructor() {}

  ngOnInit() {}
  count: number;
  displayCounter(count) {
    console.log("Outptut :", count);
  }
}
