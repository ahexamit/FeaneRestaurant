import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public product: Array<any> = [];
  public grandTotal!: number;
  public placeOrder!: boolean;

  constructor(private cartservice: CartService) {}

  ngOnInit() {
    this.init();
    this.placeOrderButton();
  }
  public removeItem(item: any): void {
    this.cartservice.removeCartItem(item);
  }

  private init(): void {
    this.cartservice.getProducts().subscribe((res) => {
      this.product = res;
      console.log(this.product.length);
      this.grandTotal = this.cartservice.getTotalPrice();
    });
  }

  public placeOrderButton() {
    if (this.product.length > 0) {
      return (this.placeOrder = true);
    } else {
      return (this.placeOrder = false);
    }
  }
}
