import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // ngModel
  searchTerm = "";
  products : any = [];
  cartCount : number = 0;
  // Inject Route and Router
  constructor(private route:ActivatedRoute, private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params.searchTerm){
        this.searchTerm = params.searchTerm;
      }
    })

    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      console.log(this.products);
      this.cartCount = this.products.length;
    })
  }

  // Calls this function on press of enter on search bar
  search(): void{
    if(this.searchTerm){
      this.router.navigateByUrl('/welcome/' + this.searchTerm)
    }
  }
}
