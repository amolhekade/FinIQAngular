import { MOBPARTS } from "./mob-data";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { MobParts } from "./mob-parts";
import { MobPartService } from "src/app/services/mob-part.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-mob-parts",
  templateUrl: "./mob-parts.component.html",
  styles: []
})
export class MobPartsComponent implements OnInit {
  @Input() prodNameFromParent: string;
  headerOptions: any;

  mobParts: MobParts[];
  mob: any;
  constructor(
    private mobPartService: MobPartService,
    private http: HttpClient
  ) {
    console.log("we are in constructor .. for providers");
  }

  ngOnInit() {
    console.log("ngOnInit");
    //Data from mob-data.ts
    //this.mobParts = MOBPARTS;

    //Data from database or lage data
    // let mobPartService = new MobPartService();
    // this.mobParts = mobPartService.GetMobParts();

    //Data from outside provider usio D.I. (Data injection)
    this.mobPartService.GetMobParts().subscribe(data => {
      console.log("Service calling");
      this.mob = data;
      console.log("My service data");
      this.mobParts = this.mob;
      console.log(this.mobParts);
      console.log("End My service data");
    });
    console.log(this.mobParts);
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
}
