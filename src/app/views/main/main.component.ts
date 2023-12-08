import {Component, OnInit} from '@angular/core';
import {PopupService} from "../../shared/service/popup.service";
import {ProductService} from "../../shared/service/product.service";
import {ProductType} from "../../../types/product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public products: ProductType[] = []

  constructor(private popupService: PopupService, private productService: ProductService, private router: Router) {

  }


  ngOnInit() {

    this.popupService.observable.subscribe((element) => {
      if (element)
        element.setAttribute('style','display: block ; background: rgba(0, 0, 0, 0.5)')
    })
  }
}
