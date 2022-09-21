import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../shared/service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public cartData: Array<any> = [];
  public totalPrice: Number = 0;

  constructor(public getData: ServiceService) {
    this.getData.arrayData.map((res) => {
      console.log(res);
      this.cartData.push(res);
    });
  }

  ngOnInit(): void {}
}
