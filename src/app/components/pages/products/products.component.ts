import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product";
import {ProductService} from "../../../service/product.service";
import {Router} from "@angular/router";
import {ProductCardComponent} from "../../common/product-card/product-card.component";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  constructor(private productService: ProductService, private router:Router,) {

  }
  public products: ProductType[] = []
  ngOnInit() {
    this.productService.getProducts().subscribe({
        next: (data) => {
          this.products = data;
        },
        error: (error) => {
          console.log(error);
          this.router.navigate(['/'])
        }
      }
    )
  }
}
