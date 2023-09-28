import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  foodData: any;

  constructor(
    private service: OrderDetailsService,
    private sharedData: SharedDataService
  ) {}

  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
  }

  addToCart(item: any) {
    item.quantity++;
    this.sharedData.setItemDetail(item);
  }
}
