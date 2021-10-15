// IMPORT BELOW IS USED FOR TESTING PURPOSES ONLY!!! THIS WILL BE RETURNED BACK TO NORMAL!
import { Component, OnDestroy, OnInit } from '@angular/core';
// IMPORTS BELOW ARE USED FOR TESTING PURPOSES ONLY!!! THESE WILL BE DELETED!
import { Subscription } from 'rxjs';
import { IProduct } from '../iproduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})

// BLOCK OF CODE BELOW IS FOR TESTING PURPOSES ONLY!!! THIS WILL BE RETURNED BACK TO NORMAL!
export class ErrorPageComponent implements OnInit, OnDestroy{
  // INITIALIZATIONS BELOW ARE USED FOR TESTING PURPOSES ONLY!!! THESE WILL BE DELETED!
  products: IProduct[] = [];
  errorMessage: string = '';
  sub: Subscription = new Subscription;

  // BLOCK OF CODE BELOW IS FOR TESTING PURPOSES ONLY!!! THIS WILL BE RETURNED BACK TO NORMAL!
  // Inject ProductService to be used to get product list
  constructor(private productService: ProductService){}

  // BLOCK OF CODE BELOW IS FOR TESTING PURPOSES ONLY!!! THIS WILL BE RETURNED BACK TO NORMAL!
  ngOnInit(): void {
    // On init, subscribe to the Observable productService
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
      },
      error: err => this.errorMessage = err
    });
  }

  // BLOCK OF CODE BELOW IS FOR TESTING PURPOSES ONLY!!! THIS WILL BE DELETED!
  ngOnDestroy(){
    // We use the subscribe variable to unsubscribe on page exit
    this.sub.unsubscribe();
  }
}
