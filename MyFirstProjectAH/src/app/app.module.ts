import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";

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
import { MotoComponent } from "./products/mob-parts/moto/moto.component";
import { NokiaComponent } from "./products/mob-parts/nokia/nokia.component";
import { MobileMenuComponent } from "./products/mob-parts/mobile-menu/mobile-menu.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthGuard } from "./auth.guard";
import { AgGridComponent } from "./ag-grid/ag-grid.component";

import { AgGridModule } from "ag-grid-angular";
import { ConnectionFileComponent } from "./connection-file/connection-file.component";
import { ReactComponent } from "./forms/react/react.component";
import { TempComponent } from "./forms/temp/temp.component";

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
    HomePageComponent,
    MotoComponent,
    NokiaComponent,
    MobileMenuComponent,
    LoginComponent,
    DashboardComponent,
    AgGridComponent,
    ConnectionFileComponent,
    ReactComponent,
    TempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgGridModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
