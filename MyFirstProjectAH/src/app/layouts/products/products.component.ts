import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl:'./products.component.html' ,
   styles: []
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {


  }


  title = 'Welcome to angulartutorials';
  dummyArray=["Pune","Mumbai","Delhi"];

  mobParts=[{
    id:"S100",
    name:"Samsung S10",
    made:"Samsung",
    inStock:"5",
    prodColor:"Red",
    isOnline:true,
    price:1200,
    country:"Germany"
  },

    {id:"A100",
    name:"IPhone 10",
    made:"Apple",
    inStock:"100",
    prodColor:"Blue",
    isOnline:true,
    price:1200,
    country:"America"
  },


    {
      id:"N100",
    name:"Nokia 6.2 Plus",
    made:"Nokia",
    inStock:"0",
    prodColor:"Green",
    isOnline:false,
    price:1200,
    country:"India"}
  ]

}
