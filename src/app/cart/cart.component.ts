import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  // hardocded data for now
  public products : any=[];
  public pendingItem : any={};
  public grandTotal !: number;
  public vatPrice : number = 0;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    // will be used when add to cart button is working
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      console.log(this.products);
      this.grandTotal = this.cartService.getTotalPrice();
      this.vatPrice = this.grandTotal * 0.1071442
    })
  }

  removeItem(item: any){
    this.cartService.removeCartItem(item);
    // console.log(item.productID);
  }

  pendingForRemoval(item:any){
    this.pendingItem = item;
    console.log(this.pendingItem.productID);
  }
}
