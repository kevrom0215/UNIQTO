import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //hard coded cartItemList for now, might change type any soon by adding an interface
  public cartItemList : any = [];

  //can emit data to it and also act as an observable?
  public productList = new BehaviorSubject<any>([]);

  constructor() { }

  //if they do this, they can be able to subscribe
  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  //not yet useable until product.service is functional
  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.productPrice;
    })
    return grandTotal;
  }

  removeCartItem(product: any){
    // this.cartItemList.map((a:any, index:any)=>{
    //   if(product.productID === a.productID){
    //     this.cartItemList.splice(index,1)
    //   }
    // })
    for(let i=0 ; i<this.cartItemList.length ; i++){
      if(product.productID === this.cartItemList[i].productID){
        if(product.chosenColor == this.cartItemList[i].chosenColor){
          if(product.chosenSize == this.cartItemList[i].chosenSize){
            console.log(this.cartItemList[i]);
            console.log(product);
            console.log(i);
            this.cartItemList.splice(i,1);
            break;
          }
        }
      }
    }
    this.productList.next(this.cartItemList);
  }
  removeAll() {
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}
