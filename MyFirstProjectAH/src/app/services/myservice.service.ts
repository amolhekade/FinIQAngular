import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MyServiceService {
  constructor() {}

  CheckUserNameAndPassword(uname: string, pwd: string) {
    if (uname == "admin" && pwd == "admin") {
      localStorage.setItem("username", "admin");
      return true;
    } else {
      localStorage.removeItem("username");
      return false;
    }
  }
}
