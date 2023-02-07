import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages.component';
import {HeaderComponent} from "../core/header/header.component";
import {HomeComponent} from './home/home.component';
import {SharedModule} from "../shared/shared.module";
import {AboutComponent} from "./about/about.component";
import {FooterComponent} from "../core/footer/footer.component";
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
  ]
})
export class PagesModule {
}
