import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  public listItem : any = {};
  public itemToShow:any = {};
  public productItem = new BehaviorSubject<any>({});

  constructor() { }

  //those that call this will be able to subscribe to it
  getProduct(){
    return this.productItem.asObservable();
    // return of(this.productItem).pipe(delay(5000));
  }

  // optional?
  setProduct(product : any){
    this.listItem = product;
    this.productItem.next(product);
  }

  revealProduct(product: any){
    this.listItem = product;
    this.productItem.next(this.listItem);
    this.returnItem(product);
  }

  returnItem(product: any){
    sessionStorage.theProduct = product;
    sessionStorage.setItem("theProduct", JSON.stringify(product));
  }

  getAverageStars(product: any){
    let sum : number = 0;
    for(let i=0; i<product.productReviews.length; i++){
      sum = sum + product.productReviews[i].userRating;
    }
    return sum / product.productReviews.length;
  }
}
