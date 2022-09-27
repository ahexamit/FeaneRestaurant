import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css'],
})
export class PlaceorderComponent implements OnInit {
  public product: any = [];
  public grandTotal!: number;
  detailForm!: FormGroup;
  submitted: boolean = false;

  constructor(private cartservice: CartService, public fb: FormBuilder) {}

  ngOnInit(): void {
    this.cartservice.getProducts().subscribe((res) => {
      this.product = res;
      this.grandTotal = this.cartservice.getTotalPrice();
    });
    this.formData();
  }
  get f(): { [key: string]: AbstractControl } {
    return this.detailForm.controls;
  }
  public submit() {
    this.submitted = true;
  }
  public formData() {
    this.detailForm = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      table: ['', Validators.required],
    });
  }
}
