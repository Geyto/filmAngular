import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PopupComponent} from "./components/popup/popup.component";
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {QuestionsComponent} from "./components/questions/questions.component";
import {RouterModule} from "@angular/router";
import {NgbAccordionModule} from "@ng-bootstrap/ng-bootstrap";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PopupComponent,
    ProductCardComponent,
    QuestionsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbAccordionModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PopupComponent,
    ProductCardComponent,
    QuestionsComponent,
  ]
})
export class SharedModule { }
