import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MobPartsComponent } from "./products/mob-parts/mob-parts.component";
import { BooksComponent } from "./products/books/books.component";
import { PageNotFoundComponent } from "./layouts/page-not-found/page-not-found.component";
import { HomePageComponent } from "./layouts/home-page/home-page.component";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "Home", component: HomePageComponent },
  { path: "Mobiles", component: MobPartsComponent },
  { path: "Books", component: BooksComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
