import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from '../product-details.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public productList:any;
  

  constructor(private product: ProductService, private productDetailsService: ProductDetailsService) { }

  ngOnInit(): void {
    this.product.getProducts()
      .subscribe(res=>{
        this.productList = res;
    })
  }

  revealProduct(item: any){
    this.productDetailsService.revealProduct(item);
  }
  
}


