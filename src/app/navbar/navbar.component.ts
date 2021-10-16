import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // ngModel
  searchTerm = "";

  // Inject Route and Router
  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params.searchTerm){
        this.searchTerm = params.searchTerm;
      }
    })
  }

  // Calls this function on press of enter on search bar
  search(): void{
    if(this.searchTerm){
      this.router.navigateByUrl('/welcome/' + this.searchTerm)
    }
  }
}
