import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {OrderService} from "../../../service/order.service";


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit{
  submitFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Zа-яёА-ЯЁ]+$')]),
    last_name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Zа-яёА-ЯЁ]+$')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^\\+?[1-9][0-9]{7,10}$')]),
    country: new FormControl('', [Validators.required,]),
    zip: new FormControl('', [Validators.required,]),
    product: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-zа-яёА-ЯЁ0-9\\-\\s\\/]+$')]),
    comment: new FormControl('', [Validators.required,]),
  })

  param:string
  success: number
  message: string
  submitButton: HTMLElement | null
  constructor(private activatedRoute: ActivatedRoute, private http:HttpClient, private orderService: OrderService) {
    this.param = ''
    this.success = 0
    this.message = ''
    this.submitButton = null;
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['product']) {
        this.param = params['product']
      }
    })
    this.submitFormGroup.patchValue({
      product: this.param
    })

  }
  createOrder(){
    if (this.submitButton)
      this.submitButton = document.getElementById('send')
    if (this.submitButton)
    this.submitButton.setAttribute('readonly', 'true')
    let error: boolean = false
    if (this.submitFormGroup.get('name')?.invalid && this.submitFormGroup.get('last_name')?.invalid && this.submitFormGroup.get('phone')?.invalid &&
      this.submitFormGroup.get('country')?.invalid && this.submitFormGroup.get('zip')?.invalid && this.submitFormGroup.get('product')?.invalid &&
      this.submitFormGroup.get('address')?.invalid){
      error = true
    }
    if (error === true){
      return
    }
    this.orderService.createOrder(
      this.submitFormGroup.value
    ).subscribe((response) => {
      console.log(response)
      if (response.success === 0){
          this.message = response.message
        setTimeout(() =>{
        },3000)
      }
      if (response.success === 1){
        this.submitButton?.removeAttribute('disabled')
        console.log(response.message)
        this.success = response.success
      }
    })
  }
  get name(){
    return this.submitFormGroup.get('name')
  }
  get last_name(){
    return this.submitFormGroup.get('last_name')
  }
  get phone(){
    return this.submitFormGroup.get('phone')
  }
  get country(){
    return this.submitFormGroup.get('country')
  }
  get zip(){
    return this.submitFormGroup.get('zip')
  }
  get address(){
    return this.submitFormGroup.get('address')
  }
}

