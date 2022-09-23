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

  public setProducts(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  public addToCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }
  public getTotalPrice(): number{
    let grandTotal:number = 0;
    this.cartItemList.map((a: any) => {
      grandTotal = grandTotal+ a.total;
    console.log(grandTotal);
    
    });
    return grandTotal;
  }

  public removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.productList.next(this.cartItemList);
  }
}
