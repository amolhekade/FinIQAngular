import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { MobParts } from "./../products/mob-parts/mob-parts";
import { Injectable } from "@angular/core";
import { MOBPARTS } from "../products/mob-parts/mob-data";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class MobPartService {
  constructor(private http: HttpClient) {}

  GetMobParts<MobParts>(): Observable<MobParts> {
    //return MOBPARTS;
    console.log("Service calling");
    return this.http.get<MobParts>(
      `http://localhost:4200/FinIQService/AngularAPI.svc/GetDCMobiles`
    );
    // .pipe(map((res: Response) => res));
  }
}
