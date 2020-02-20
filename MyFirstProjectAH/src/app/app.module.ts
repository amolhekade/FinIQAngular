import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { NavComponent } from "./layouts/nav/nav.component";
import { BannerOneComponent } from "./layouts/banner-one/banner-one.component";
import { ProductsComponent } from "./layouts/products/products.component";
import { BannerTwoComponent } from "./layouts/banner-two/banner-two.component";
import { BannerThreeComponent } from "./layouts/banner-three/banner-three.component";
import { ContactUsComponent } from "./layouts/contact-us/contact-us.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { HeaderComponent } from "./layouts/header/header.component";
import { MobPartsComponent } from "./products/mob-parts/mob-parts.component";
import { BooksComponent } from "./products/books/books.component";
import { PageNotFoundComponent } from "./layouts/page-not-found/page-not-found.component";
import { HomePageComponent } from "./layouts/home-page/home-page.component";

import { SqrtPipe } from "./pipes/sqrt.pipe";
import { PowerPipe } from "./pipes/power.pipe";
import { FirstDirective } from "./directives/first.directive";
import { SecondDirective } from "./directives/second.directive";
import { HostDirective } from "./directives/host.directive";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerOneComponent,
    ProductsComponent,
    BannerTwoComponent,
    BannerThreeComponent,
    ContactUsComponent,
    FooterComponent,
    HeaderComponent,
    MobPartsComponent,
    BooksComponent,
    SqrtPipe,
    PowerPipe,
    FirstDirective,
    SecondDirective,
    HostDirective,
    PageNotFoundComponent,
    HomePageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
