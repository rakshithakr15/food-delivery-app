import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-order-cart',
  templateUrl: './order-cart.component.html',
  styleUrls: ['./order-cart.component.css'],
})
export class OrderCartComponent implements OnInit {
  cartItems: any;

  constructor(private sharedData: SharedDataService) {}

  ngOnInit(): void {
    // this.sharedData.itemDetail.subscribe((cartData) => {
    //   this.cartItems = cartData;
    //   console.log('cartItems', this.cartItems);
    // });

    this.getCartData();
  }

  updateItemQuantity(ev: Event, item: any) {
    item.quantity = (ev.target as HTMLInputElement).value;
    this.sharedData.setItemDetail(item);
  }

  deleteItem(item: any) {
    console.log('item', item);
    this.sharedData.deleteCartItem(item);
    this.getCartData();
    console.log('this.cartItems', this.cartItems);
  }

  getCartData() {
    this.cartItems = this.sharedData.cartItems;
  }
}
