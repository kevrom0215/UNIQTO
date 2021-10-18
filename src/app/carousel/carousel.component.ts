import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent  {

  public slides: string[] = [
    "https://im.uniqlo.com/global-cms/spa/res4b2f74d5241f7455caba934a9bd61f56fr.jpg",
    "https://im.uniqlo.com/global-cms/spa/res99e0cc5b4134bedd56fb340c6155f959fr.jpg",
    "https://im.uniqlo.com/global-cms/spa/res5b27fa6817af7ae87bd5a8a147ae0b40fr.jpg",
    "https://im.uniqlo.com/global-cms/spa/resd77fefb8aba6aa50b9bc1e9b43be4de6fr.jpg"
  ];

  i=0;

  getSlide() {
    return this.slides[this.i];
  }

  getPrev() {
    this.i = this.i===0 ? 0 : this.i - 1;
  }
  //edit here    
  getNext() {
    this.i = this.i===this.slides.length ? this.i : this.i + 1;
    this.i = this.i!==this.slides.length ? this.i : this.i = 0;
  }
  
  constructor() { }

}
