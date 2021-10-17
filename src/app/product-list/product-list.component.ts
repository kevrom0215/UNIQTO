import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductDetailsService } from '../product-details.service';
import { ProductService } from '../product.service';

// Imports for navbar search function
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../iproduct';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  // Stores the product list here
  public productListRaw: IProduct[] = [];
  // Stores the filtered product list here
  public productList: IProduct[] = [];
  public searchTerm: string | null = '';

  // Used to unsubscribe on page exit
  sub: Subscription = new Subscription;

  constructor(private product: ProductService, private productDetailsService: ProductDetailsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.product.getProducts()
      .subscribe(res=>{
        this.productListRaw = res;
        this.productList = this.productListRaw;
        // Subscribe to the route.params for filtering
        this.route.params.subscribe(params => {
          if (params.searchTerm){
            // Gets search term from url
            this.searchTerm = this.route.snapshot.paramMap.get('searchTerm');
            // Filters product list
            this.productList = this.productListRaw.filter(
                item => (item.productName.toLowerCase().includes(params.searchTerm.toLowerCase()) ||
                item.productDescription.toLowerCase().includes(params.searchTerm.toLowerCase()))
            )
          }
        })
    })
  }

  revealProduct(item: any){
    this.productDetailsService.revealProduct(item);
  }
  

  ngOnDestroy(){
    // We use the subscribe variable to unsubscribe on page exit
    this.sub.unsubscribe();
  }
}


