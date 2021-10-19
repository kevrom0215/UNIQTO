import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { WishlistService } from '../wishlist.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  public products : any=[];

  //from prod details
  public prodToKeep: any = {};
  public averageRating : number = 0;
  public photoToChoose : string = "";
  public colorToChoose : string = "";
  public sizeToChoose : string = "";
  public canFinallyAdd : boolean = false;
  public successfulAdditon : boolean = true;
  public isSActive : boolean = false;
  public isMActive : boolean = false;
  public isLActive : boolean = false;

  constructor(private wishlistService : WishlistService, private cartService: CartService) { }

  ngOnInit(): void {
    this.wishlistService.getProducts()
    .subscribe(res=>{
      this.products = res;
      console.log(this.products);
    })
  }

  removeItem(item: any){
    this.wishlistService.removeWishlistItem(item);
  }

  emptyWishlist(){
    this.wishlistService.removeAll();
  }

  addToCart(item: any){
    this.cartService.addtoCart(item);
    console.log(item);
  }

}
