import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public product: any = [];
  public grandTotal!: number;

  constructor(private cartservice: CartService) {}

  ngOnInit() {
    this.init();
  }
  public removeItem(item: any):void {
    this.cartservice.removeCartItem(item);
  }

  private init(): void {
    this.cartservice.getProducts().subscribe((res) => {
      this.product = res;
      this.grandTotal = this.cartservice.getTotalPrice();
    });
  }
}
