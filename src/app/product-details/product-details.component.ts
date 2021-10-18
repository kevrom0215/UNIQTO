import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { ProductDetailsService } from '../product-details.service';
import { ProductListComponent } from '../product-list/product-list.component';
import { CartService } from '../cart.service';

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
  
  // constructor(private productDetailsService : ProductDetailsService) {}
    
  constructor(private productDetailsService : ProductDetailsService, private cartService: CartService, private _route:ActivatedRoute) {}

  

  ngOnInit(): void {

    this.prodToKeep = sessionStorage.getItem("theProduct");
    this.product = JSON.parse(this.prodToKeep);
    
    // this.productDetailsService.getProduct()
    // .subscribe(res=>{
    //   this.product = res;
    // })

    this.averageRating = this.productDetailsService.getAverageStars(this.product);
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
    alert("Item added to cart");
    
  }

  textureAssign(product:any, index:number){
    this.colorToChoose = this.productDetailsService.getColorScheme(product, index);
    this.photoToChoose = this.productDetailsService.getProperPhoto(product, index);
    console.log("COLOR: " , this.colorToChoose);
    console.log("URL: ", this.photoToChoose);
    this.checkIfClear();
  }

  sizeAssign(size: string){
    this.sizeToChoose = size;
    console.log("SIZE: ", this.sizeToChoose);
    this.checkIfClear();
  }

  checkIfClear(){
    if(this.sizeToChoose !== "" && this.colorToChoose !== "" && this.photoToChoose !== ""){
      this.canFinallyAdd = true;
    }
  }

  onButtonGroupClick($event:any){
    let clickedElement = $event.target || $event.srcElement;
    if( clickedElement.nodeName === "BUTTON" ) {

      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active");
      // if a Button already has Class: .active

      clickedElement.className += " active";
    }
  }
}
