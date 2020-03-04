import { MobParts } from "./mob-parts";

export const MOBPARTS: MobParts[] = [
  {
    id: "S000",
    name: "Samsung S10",
    made: "Samsung",
    inStock: 500,
    prodColor: "Red",
    isOnline: true,
    price: 1200,
    country: "Germany",
    imgpath: "./../assets/img/mob1.png", //Property binding
    //imgpath: "mob1.png",//interpolation binding
    quantity: 0
  },

  {
    id: "A100",
    name: "IPhone 10",
    made: "Apple",
    inStock: 200,
    prodColor: "Blue",
    isOnline: true,
    price: 1200,
    country: "America",
    imgpath: "./../assets/img/mob2.png", //Property binding
    //imgpath: "mob2.png",//interpolation binding
    quantity: 0
  },

  {
    id: "N100",
    name: "nokia 6.2 Plus",
    made: "Nokia",
    inStock: 0,
    prodColor: "Green",
    isOnline: false,
    price: 1200,
    country: "India",
    imgpath: "./../assets/img/mob3.png", //Property binding
    //imgpath: "mob3.png",//interpolation binding
    quantity: 0
  }
  // ,
  // {
  //   id: "H100",
  //   name: "Honor 6.2 Plus",
  //   made: "Houwai",
  //   inStock: 10,
  //   prodColor: "Green",
  //   isOnline: true,
  //   price: 1200,
  //   country: "India",
  //   imgpath: "./../assets/img/mob4.png", //Property binding
  //   //imgpath: "mob4.png", //interpolation binding
  //   quantity: 0
  // }
];
