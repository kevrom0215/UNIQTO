import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchTerm = "";  // Two-way bound
  products : any = [];
  cartCount : number = 0;
  wishlistCount : number = 0;

  // Inject Route, Router, and CartService into this component
  constructor(private route:ActivatedRoute, private router: Router, private cartService: CartService, private wishlistService: WishlistService) { }

  ngOnInit(): void {
    // Subscribes to the route parameter
    this.route.params.subscribe(params => {
      if(params.searchTerm){
        this.searchTerm = params.searchTerm;
      }
    })

    // Subscribes to the products in the cart service
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.cartCount = this.products.length;
    })

    // Subscribes to the products in the wishlist service
    this.wishlistService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.wishlistCount = this.products.length;
    })
  }

  // Calls this function on keypress on search bar
  search(): void{
    if(this.searchTerm){
      this.router.navigateByUrl('/welcome/' + this.searchTerm)
    }
  }
}
