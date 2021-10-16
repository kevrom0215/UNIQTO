import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { ProductDetailsService } from '../product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  // product: any| null;

  // constructor(private item: ProductService, private _route:ActivatedRoute) { }
  
  // async ngOnInit(){
  //   this.product = await this.item.getProducts();
  //   console.log(this.product);
  //   this._route.paramMap.subscribe(params =>{
  //     this.product = params.get('product');
  //   })
  // }
  public product: any = {};
  chosenProductID: string|null="";
  chosenProductPrice: any;
  chosenProductName: string | null="";
  chosenProductColor: string | null="";
  chosenProductSize: string| null="";
  
  constructor(private productDetailsService : ProductDetailsService) {}

  ngOnInit(): void {
    this.productDetailsService.getProduct()
    .subscribe(res=>{
      this.product = res;
    })
  }
  addToCart(){
    this.chosenProductID = this.product.productID;
    this.chosenProductName = this.product.productName;
    this.chosenProductPrice = this.product.productPrice;
    console.log(this.chosenProductSize);
    console.log(this.chosenProductColor);
    
  }
}
