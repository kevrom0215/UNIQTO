import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  public products : any=[];

  constructor(private wishlistService : WishlistService) { }

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

}
