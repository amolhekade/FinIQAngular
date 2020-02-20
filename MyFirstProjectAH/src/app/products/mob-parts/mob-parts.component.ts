import { MOBPARTS } from "./mob-data";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { MobParts } from "./mob-parts";

@Component({
  selector: "app-mob-parts",
  templateUrl: "./mob-parts.component.html",
  styles: []
})
export class MobPartsComponent implements OnInit {
  @Input() prodNameFromParent: string;
  constructor() {
    console.log("constructor");
  }

  mobParts: MobParts[];

  ngOnInit() {
    console.log("ngOnInit");
    this.mobParts = MOBPARTS;
  }
  ngOnChanges() {
    console.log("ngOnChanges");
  }
  ngDoCheck() {
    console.log("ngDoCheck");
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy() {
    console.log("ngOnDestroy");
    this.mobParts = null;
  }
  // mobParts : MobParts[]=[{
  //   id:"S100",
  //   name:"Samsung S10",
  //   made:"Samsung",
  //   inStock:500,
  //   prodColor:"Red",
  //   isOnline:true,
  //   price:1200,
  //   country:"Germany",
  //   imgpath:"./../assets/img/mob1.png"
  // },

  //   {id:"A100",
  //   name:"IPhone 10",
  //   made:"Apple",
  //   inStock:200,
  //   prodColor:"Blue",
  //   isOnline:true,
  //   price:1200,
  //   country:"America",
  //   imgpath:"./../assets/img/mob2.png"
  // },

  //   {
  //     id:"N100",
  //   name:"nokia 6.2 Plus",
  //   made:"Nokia",
  //   inStock:0,
  //   prodColor:"Green",
  //   isOnline:false,
  //   price:1200,
  //   country:"India",
  //   imgpath:"./../assets/img/mob3.png"
  // }
  // ];

  calcProd() {
    let sum: number = 0;
    for (let mobPart of this.mobParts) {
      sum = sum + mobPart.inStock;
    }
    return sum;
  }

  IncreaseQuantity(mobPart) {
    if (mobPart.quantity < mobPart.inStock) mobPart.quantity++;
  }
  DecreaseQuantity(mobPart) {
    if (mobPart.quantity != 0) mobPart.quantity--;
  }

  CatchEvent(event) {
    console.log(event);
    console.log(event.target.value);
  }

  @Output() valueChange = new EventEmitter();
  counter = 1;
  valueChanged() {
    // You can give any function name
    this.counter = this.counter + 1;
    this.valueChange.emit(this.counter);
  }
}
