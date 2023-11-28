import {Component, Input, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],

})
export class ProductCardComponent implements OnInit{
  @Input() product:ProductType
  constructor() {
    this.product = {
      id: 0,
      image: '',
      title: '',
      price: 0,
      description:'',
    }

  }
  ngOnInit() {
    if (this.product.description.length > 40){
      this.product.description = this.product.description.slice(0, 160)+'...'
    }
  }
}
