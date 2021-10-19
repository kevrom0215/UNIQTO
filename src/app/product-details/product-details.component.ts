import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { ProductDetailsService } from '../product-details.service';
import { ProductListComponent } from '../product-list/product-list.component';
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';

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
  public averageRating : number = 0;
  public photoToChoose : string = "";
  public colorToChoose : string = "";
  public sizeToChoose : string = "";
  public canFinallyAdd : boolean = false;
  public successfulAdditon : boolean = true;
  public isSActive : boolean = false;
  public isMActive : boolean = false;
  public isLActive : boolean = false;

  
  // constructor(private productDetailsService : ProductDetailsService) {}
    
  constructor(private productDetailsService : ProductDetailsService, private cartService: CartService, private wishlistService: WishlistService, private _route:ActivatedRoute) {}

  

  ngOnInit(): void {

    this.prodToKeep = sessionStorage.getItem("theProduct");
    this.product = JSON.parse(this.prodToKeep);
    
    // this.productDetailsService.getProduct()
    // .subscribe(res=>{
    //   this.product = res;
    // })

    

    this.averageRating = this.productDetailsService.getAverageStars(this.product);
    // let allInputButtons = document.getElementsByClassName("texture-button") as HTMLCollectionOf<HTMLInputElement>;
    // console.log(allInputButtons[0]);
  }

  //for adding to wishlist
  addToWishlist(item: any){
    //let myCustomObject : object = {
      //chosenID: this.product.index,
    //  chosenColor: this.colorToChoose
    //};
    this.wishlistService.addToWishlistItem(item);
    this.canFinallyAdd = false;
  }

  addToCart(){
    let myCustomObject : object = {
      productID: this.product.productID,
      productName: this.product.productName,
      productPrice: this.product.productPrice,
      chosenColor: this.colorToChoose,
      chosenSize: this.sizeToChoose,
      chosenPhoto: this.photoToChoose,
    };
    this.cartService.addtoCart(myCustomObject);
    // this.successfulAdditon = false;
    // alert("Item added to cart");
  }

  textureAssign(product:any, index:number){
    this.colorToChoose = this.productDetailsService.getColorScheme(product, index);
    this.photoToChoose = this.productDetailsService.getProperPhoto(product, index);
    // console.log("COLOR: " , this.colorToChoose);
    // console.log("URL: ", this.photoToChoose);
    this.checkIfClear();
  }

  sizeAssign(size: string){
    this.sizeToChoose = size;
    console.log("SIZE: ", this.sizeToChoose);
    if(this.sizeToChoose === "S"){
      this.isSActive = true;
      this.isMActive = false;
      this.isLActive = false;
    }else if (this.sizeToChoose === "M"){
      this.isMActive = true;
      this.isSActive = false;
      this.isLActive = false;
    }else if (this.sizeToChoose === "L"){
      this.isLActive = true;
      this.isSActive = false;
      this.isMActive = false;
    }
    this.checkIfClear();
  }

  checkIfClear(){
    if(this.sizeToChoose !== "" && this.colorToChoose !== "" && this.photoToChoose !== ""){
      this.canFinallyAdd = true;
    }
  }

  
}
