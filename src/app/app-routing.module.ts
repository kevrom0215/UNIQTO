import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
      {path: 
        'products/:id',
        component: ProductDetailsComponent
      },
      {path: 'cart', component: CartComponent},
      // Please delete after use
      {path: 'product-details', component: ProductDetailsComponent},
      {path: 'welcome', component: ProductListComponent},
      {path: 'about-us', component: AboutUsComponent},
      {path: '', redirectTo:'welcome', pathMatch:'full'},
      {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
