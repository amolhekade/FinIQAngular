import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-one',
  template: `
  <!-- banner-one.component.html -->
  <div id="index-banner" class="parallax-container">
    <div class="section no-pad-bot">
      <div class="container">
        <br /><br />
        <h1 class="header center teal-text text-lighten-2">FinIQ (I) Consulting Pvt. Ltd.</h1>
        <div class="row center">
          <h5 class="header col s12 light">
            A modern responsive front-end framework based on Material Design
          </h5>
        </div>
        <div class="row center">
          <a href="#" id="download-button" class="btn-large waves-effect waves-light teal lighten-1">Get
            Started</a>
        </div>
        <br /><br />
      </div>
    </div>
    <div class="parallax">
      <img src="./../assets/img/background1.jpg" alt="Unsplashed background img 1" />
    </div>
  </div>
  <!--/ banner-one.component.html -->
  `,
  styles: []
})
export class BannerOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
