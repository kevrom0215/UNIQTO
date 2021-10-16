import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  // hardocded data for now
  public products : any=[
    {
      productID: 441647,
      productName:"Easy Care Comfort Striped Long Sleeve Shirt",
      productPrice: 1290,
      chosenColor: "66 BLUE",
      chosenSize:"M",
      chosenPhoto:"https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/441647/item/goods_66_441647.jpg?width=1600&impolicy=quality_75"
    },
    {
      productID: 441647,
      productName:"Easy Care Comfort Striped Long Sleeve Shirt",
      productPrice: 1290,
      chosenColor: "66 BLUE",
      chosenSize:"M",
      chosenPhoto:"https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/441647/item/goods_66_441647.jpg?width=1600&impolicy=quality_75"
    }
  ];
  public grandTotal !: number;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    // will be used when add to cart button is working
    // this.cartService.getProducts()
    // .subscribe(res=>{
    //   this.products = res;
    //   console.log(this.products);
    //   this.grandTotal = this.cartService.getTotalPrice();
    // })
  }

  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }

}
