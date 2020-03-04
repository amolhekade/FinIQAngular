import { Routes } from "@angular/router";
import { DashboardComponent } from "./../dashboard/dashboard.component";
import { Router } from "@angular/router";
import { MyServiceService } from "./../services/myservice.service";
import { Output } from "@angular/core";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",

  providers: [MyServiceService]
})
export class LoginComponent implements OnInit {
  constructor(private service: MyServiceService, private routes: Router) {}

  msg;
  ngOnInit() {}
  CheckUserNameAndPassword(uname: string, pwd: string) {
    console.log("login ts");
    var output = this.service.CheckUserNameAndPassword(uname, pwd);
    if (output) {
      this.routes.navigate(["/Dashboard"]);
    } else {
      this.msg =
        "Invalid username or password. please try with correct passowrd and username";
    }
  }
}
