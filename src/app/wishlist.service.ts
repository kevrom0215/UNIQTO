import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  public wishlistItemList : any = []
  public productList = new BehaviorSubject<any>([]);

  constructor() { }
  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product : any) {
    this.wishlistItemList.push(...product);
    this.productList.next(product);
  }

  addToWishlistItem(product: any){
    this.wishlistItemList.push(product);
    this.productList.next(this.wishlistItemList);
    console.log(this.wishlistItemList);
  }

  removeWishlistItem(product: any){
    this.wishlistItemList.map((a:any, index:any)=>{
      if(product.id === a.id) {
        this.wishlistItemList.splice(index, 1);
      }
    })
  }

  removeAll() {
    this.wishlistItemList = []
    this.productList.next(this.wishlistItemList);
  }
}

