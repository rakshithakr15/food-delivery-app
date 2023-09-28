import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  cartItemNo: any;

  constructor(private sharedData: SharedDataService) {}

  ngOnInit() {
    this.sharedData.itemDetail.subscribe((el: any) => {
      this.cartItemNo = el.length;
      console.log('this.cartItemNo', this.cartItemNo);
    });
  }
}
