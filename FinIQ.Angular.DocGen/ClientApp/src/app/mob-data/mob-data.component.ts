import { Component, OnInit, Inject } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";

@Component({
  selector: "app-mob-data",
  templateUrl: "./mob-data.component.html",
  styles: []
})
export class MobDataComponent implements OnInit {
  headerOptions: any = "";
  SaveMobilesResponse: DCSaveMobilesResponse[];

  constructor(
    private http: HttpClient,
    @Inject("BASE_URL") private baseUrl: string
  ) {}

  ngOnInit() {
    this.getMobileData();
  }

  getMobileData() {
    this.headerOptions = new HttpHeaders({
      "Content-Type": "application/json"
    });

    this.http
      .post<DCSaveMobilesResponse[]>(
        this.baseUrl + "weatherforecast",
        {
          id: "String content",
          name: "String content"
        },
        { headers: this.headerOptions }
      )
      .subscribe(
        result => {
          this.SaveMobilesResponse = result;
          console.log("Response ", result);
        },
        error => console.error(error)
      );
  }
}

interface DCSaveMobilesResponse {
  SuccuessFail: string;
  ResponseAt: Date;
}
