import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { ProductDetailsService } from '../product-details.service';
import { ProductService } from '../product.service';
import { WishlistService } from '../wishlist.service';


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
  public prodToKeep: any = {};
  public averageRating : number = 0;
  public photoToChoose : string = "";
  public colorToChoose : string = "";
  public sizeToChoose : string = "";
  public canFinallyAdd : boolean = false;


  // Used to unsubscribe on page exit
  sub: Subscription = new Subscription;

  constructor(private product: ProductService, private productDetailsService: ProductDetailsService, private wishlistService: WishlistService, private route: ActivatedRoute) { }

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

  addToWishlist(item: any){
    //let myCustomObject : object = {
      //chosenID: this.product.index,
    //  chosenColor: this.colorToChoose
    //};
    this.wishlistService.addToWishlistItem(item);
    this.canFinallyAdd = false;
  }

  revealProduct(item: any){
    this.productDetailsService.revealProduct(item);
  }
  

  ngOnDestroy(){
    // We use the subscribe variable to unsubscribe on page exit
    this.sub.unsubscribe();
  }

  textureAssign(product:any, index:number){
    this.colorToChoose = this.productDetailsService.getColorScheme(product, index);
    console.log("COLOR: " , this.colorToChoose);
    this.checkIfClear();
  }

  checkIfClear(){
    this.canFinallyAdd = false;
    if(this.colorToChoose !== ""){
      this.canFinallyAdd = true;
    }
  }
}