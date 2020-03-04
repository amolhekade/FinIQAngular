import { Component, Inject, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";

@Component({
  selector: "app-fetch-data",
  templateUrl: "./fetch-data.component.html"
})
export class FetchDataComponent {
  forecasts: WeatherForecast[];

  constructor(
    private http: HttpClient,
    @Inject("BASE_URL") private baseUrl: string
  ) {}

  ngOnInit() {
    this.http
      .get<WeatherForecast[]>(this.baseUrl + "weatherforecast")
      .subscribe(
        result => {
          this.forecasts = result;
        },
        error => console.error(error)
      );
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
