import { AgGridComponent } from "./ag-grid/ag-grid.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MobileMenuComponent } from "./products/mob-parts/mobile-menu/mobile-menu.component";
import { NokiaComponent } from "./products/mob-parts/nokia/nokia.component";
import { MotoComponent } from "./products/mob-parts/moto/moto.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MobPartsComponent } from "./products/mob-parts/mob-parts.component";
import { BooksComponent } from "./products/books/books.component";
import { PageNotFoundComponent } from "./layouts/page-not-found/page-not-found.component";
import { HomePageComponent } from "./layouts/home-page/home-page.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "AgGrid", component: AgGridComponent },
  { path: "Login", component: LoginComponent },
  {
    path: "Dashboard",
    canActivate: [AuthGuard],
    component: DashboardComponent
  },
  { path: "Home", component: HomePageComponent },

  {
    path: "Mobiles",
    component: MobileMenuComponent,
    children: [
      {
        path: "",
        component: MobPartsComponent
      },
      {
        path: "Moto",
        component: MotoComponent
      },
      {
        path: "Nokia",
        component: NokiaComponent
      }
    ]
  },
  { path: "Books", component: BooksComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
