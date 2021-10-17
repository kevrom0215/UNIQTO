import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges {

  @Input()
  rating: number =  0;
  cropWidth: number = 90;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.cropWidth = this.rating * 90/5;
  }

}
