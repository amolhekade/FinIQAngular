import { MyServiceService } from "./services/myservice.service";
import { LoginComponent } from "./login/login.component";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log("Auth Guard");
    if (localStorage.getItem("username") != null) {
      console.log("To Dashboard");
      return true;
    } else {
      console.log("To Login");
      this.router.navigate(["/Login"]);
      return false;
    }
  }
}
