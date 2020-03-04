import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit, Inject } from "@angular/core";

@Component({
  selector: "app-connection-file",
  templateUrl: "./connection-file.component.html",
  styleUrls: ["./connection-file.component.css"]
})
export class ConnectionFileComponent implements OnInit {
  headerOptions: any = "";

  constructor(private http: HttpClient, @Inject("BASE_URL") baseUrl: string) {}

  ngOnInit() {
    this.headerOptions = new HttpHeaders({
      "Content-Type": "application/json"
    });

    this.http
      .post(
        "api/MultiStreaming/GetDCMobiles",
        {},
        { headers: this.headerOptions }
      )
      .subscribe((res: any) => {
        console.log(res);
      });
  }
}
