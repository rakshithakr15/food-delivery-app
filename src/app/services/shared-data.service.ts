import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  constructor() {}
  cartItems: any = [];

  private cartItemDetail = new Subject<any>();
  itemDetail = this.cartItemDetail.asObservable();

  sendItemDetail(item: any) {
    this.cartItemDetail.next(item);
  }

  setItemDetail(item: any) {
    const itemIndex = this.cartItems.findIndex((el: any) => el.id === item.id);
    if (itemIndex < 0) {
      this.cartItems.push(item);
    } else {
      this.cartItems[itemIndex].quantity = item.quantity;
    }
    this.sendItemDetail(this.cartItems);
  }

  deleteCartItem(item: any) {
    this.cartItems = this.cartItems.filter((el: any) => el.id != item.id);
    this.sendItemDetail(this.cartItems);
  }
}
