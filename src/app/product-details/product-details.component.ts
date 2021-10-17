import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { ProductDetailsService } from '../product-details.service';
import { ProductListComponent } from '../product-list/product-list.component';


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

  public prodToKeep: any = {};
  
  constructor(private productDetailsService : ProductDetailsService) {}

  

  ngOnInit(): void {



    // let thisone = this.productDetailsService.getProduct()
    // .subscribe(res=>{
    //   this.product = res;;
    // })


    this.prodToKeep = sessionStorage.getItem("theProduct");
    this.product = JSON.parse(this.prodToKeep);
    
  }

}
