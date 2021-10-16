import { Component, OnInit } from '@angular/core';
import { IProduct } from '../iproduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public productList:any;
  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.product.getProducts()
      .subscribe(res=>{
        this.productList = res;

      })
    }
}


