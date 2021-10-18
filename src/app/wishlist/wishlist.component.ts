import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../iproduct';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
