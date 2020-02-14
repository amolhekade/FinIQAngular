import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styles: []
})
export class BooksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  bookProd=[{
    id:"A100",
    name:"Angular JS",
    author:"Author1",
    isin:"ISIN1234567890",
    quantity:"5",
    price:1200,
    publisher:"Germany",
    imgpath:"./../assets/img/book1.jpg"
  },

  {
    id:"B100",
    name:"ASP.Net 4",
    author:"Author2",
    isin:"ISIN1234567891",
    quantity:"7",
    price:1200,
    publisher:"India",
    imgpath:"./../assets/img/book2.jpg"
  },


  {
    id:"C100",
    name:"Angular 9",
    author:"Author3",
    isin:"ISIN1234567892",
    quantity:"2",
    price:1200,
    publisher:"Spain",
    imgpath:"./../assets/img/book3.jpg"
  }
  ]

  powerFunction(num1: number,num2:number ) {
  //document.getElementById("txtPower").va= Math.pow(num1,num2);
  }

}
