import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  public listItem : any = {};
  public productItem = new BehaviorSubject<any>({});

  constructor() { }

  //those that call this will be able to subscribe to it
  getProduct(){
    return this.productItem.asObservable();
  }

  // optional?
  setProduct(product : any){
    this.listItem = product;
    this.productItem.next(product);
  }

  revealProduct(product: any){
    this.listItem = product;
    this.productItem.next(this.listItem);
  }
}
