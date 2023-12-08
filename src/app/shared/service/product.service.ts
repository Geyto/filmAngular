import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductType} from "../../../types/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  products:ProductType[]= [];
  getProducts():Observable<ProductType[]>{
    return this.http.get<ProductType[]>('https://testologia.site/tea')
  }
  getProduct(id:number){
    return this.http.get<ProductType>(`https://testologia.site/tea?id=${id}`);
  }
}
