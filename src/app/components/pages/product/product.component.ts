import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  product = {
    id: 0,
    image: '',
    title: '',
    price: 0,
    description:'',
  }
  constructor(private productService:ProductService, private router:Router,private activatedRoute:ActivatedRoute) {
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) =>{
      if (params['id']){
        this.productService.getProduct(+params['id']).subscribe({
          next:(data) =>{
            this.product = data
          },
          error: (error) =>{
            this.router.navigate(['/'])
          }
        })
      }
    })
  }
}
