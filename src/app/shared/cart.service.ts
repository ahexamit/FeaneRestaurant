import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor() {}

  public getProducts() {
    return this.productList.asObservable();
  }

  public setProducts(product: any): void {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  public addToCart(product: any): void {
    const dummyData = this.cartItemList.find(
      (item: any) => item.title === product.title
    ); // find product by name
    console.log(dummyData);
    if (!dummyData) {
      this.cartItemList.push(product);
    } else {
      const newArray = this.cartItemList.map((each: any) => {
        if (each.title === product.title) {
          return { ...each, quantity: each.quantity + 1 };
        }
        return each;
      });
      this.cartItemList = newArray;
      console.log(this.cartItemList);
    }
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }
  public getTotalPrice(): number {
    let grandTotal: number = 0;
    this.cartItemList.map((a: any) => {
      grandTotal = grandTotal + a.quantity * a.price;
      console.log(grandTotal);
    });
    return grandTotal;
  }

  public removeCartItem(product: any): void {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.productList.next(this.cartItemList);
  }
}
