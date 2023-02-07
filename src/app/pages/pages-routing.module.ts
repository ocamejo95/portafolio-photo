import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {PagesComponent} from "./pages.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'contact', component: ContactComponent},
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
