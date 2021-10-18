import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CarouselComponent } from './carousel/carousel.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
      {path: 
        'products/:id',
        component: ProductDetailsComponent
      },
      {path: 'cart', component: CartComponent},
      // Please delete after use
      {path: 'product-details/:id', component: ProductDetailsComponent},
      {path: 'welcome', component: ProductListComponent},
      {path: 'welcome/:searchTerm', component: ProductListComponent},
      {path: 'about-us', component: AboutUsComponent},
      {path: 'contact-us', component: ContactUsComponent},
      {path: 'wishlist', component: WishlistComponent},
      {path: '', redirectTo:'welcome', pathMatch:'full'},
      {path: '**', component: ErrorPageComponent},
      {path: 'carousel', component: CarouselComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
