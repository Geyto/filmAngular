import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductType} from "../types/product";
import {OrderDataType} from "../types/order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  createOrder(data:OrderDataType){
    return this.http.post<{success:number , message: string}>('https://testologia.site/order-tea', data)
  }
}
