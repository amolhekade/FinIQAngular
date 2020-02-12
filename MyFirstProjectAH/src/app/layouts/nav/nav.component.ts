import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
  <!-- nav.component.html -->
  <nav class="white" role="navigation">
   <div class="nav-wrapper container">
     <a id="logo-container" href="#" class="brand-logo">Logo</a>
     <ul class="right hide-on-med-and-down">
       <li><a href="#">Navbar Link</a></li>
     </ul>

     <ul id="nav-mobile" class="sidenav">
       <li><a href="#">Navbar Link</a></li>
     </ul>
     <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
   </div>
 </nav>
 <!--/ nav.component.html -->
  `,
  styles: []
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
