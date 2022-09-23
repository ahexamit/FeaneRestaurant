import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public menuData: Array<any> = [];
  public count: number = 6;
  public localMenuData:Array<any>=[];

  constructor(public _getData: DataService, private cartService: CartService) {
    console.log('menu');
  }

  ngOnInit(): void {
    this._getData.getJson().subscribe((data) => {
      this.localMenuData = data;
      this.menuData = this.localMenuData.slice(0, 6);
      console.log(data);
      this.localMenuData.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: +a.price });
    console.log(typeof a.total);
        
      });
    });
  }

  public currentCategory = 'all';
  //Method to see category wise array items//
  public showAll(event: string) {
    this.currentCategory = event;
    if (event == 'all') {
      this.menuData = this.localMenuData.slice(0, 6);
      this.count = 6;
    } else {
      console.log(event);
      this.menuData = this.localMenuData
        .filter((x:any) => {
          return x.categories == event;
        })
        .slice(0, 4);
    }
  }
  //Method to see more array items//
  public seeMore() {
    this.count = this.count + 3;
    if (this.currentCategory == 'all') {
      this.menuData = this.localMenuData.slice(0, this.count);
      console.log(this.menuData);
    } else {
      this.menuData = this.localMenuData
        .filter((x:any) => {
          return x.categories == this.currentCategory;
        })
        .slice(0, this.count);
    }
  }

  public addToCart(item: any) {
    this.cartService.addToCart(item);
  }
}
