import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap, map } from 'rxjs/operators';
import { IProduct } from "./iproduct";

// Allow Angular to inject this service into components or other services
@Injectable({
  providedIn: 'root'
})

export class ProductService {
  // Identify web server
  private productUrl = 'api/products.json';

  // Inject instance of http client service into this service
  constructor(private http: HttpClient){}

  // Get the product array from the productUrl
  getProducts(): Observable <IProduct[]>{
    // Call the http get method which returns an observable  
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      // Operator for handling errors
      catchError(this.handleError)
    );
  }

  // Get the 1 product for product-detail page using id
  getProduct(id: number): Observable<IProduct | undefined> {
    return this.getProducts().pipe(
        map((products: IProduct[]) => products.find(p => p.productID === id))
    );
  }

  // Handling error when calling the http get method
  private handleError(err: HttpErrorResponse){
    let errorMessage = '';
    if(err.error instanceof ErrorEvent){
      // A client-side or network error occured. Handle it accordingly.
      errorMessage = `An error occured: ${err.error.message}`;
    }
    else{
      // The backend returned an unsuccessful response code
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`
    }
    // Pops an alert to the user
    alert(errorMessage);
    // Returns 
    return throwError(errorMessage);
  }
}
