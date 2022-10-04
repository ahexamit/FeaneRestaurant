import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-booktable',
  templateUrl: './booktable.component.html',
  styleUrls: ['./booktable.component.css'],
})
export class BooktableComponent implements OnInit {
  public submitted: boolean = false;
  public bookTableForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.bookForm();
  }
  public bookForm(): void {
    this.bookTableForm = this.fb.group({
      name: ['', [Validators.required,Validators.pattern('^[a-zA-Z \-\']+')]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      time: ['', Validators.required],
      people: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    });
  }
  public get f(): { [key: string]: AbstractControl } {
    return this.bookTableForm.controls;
  }
  public submit(): void {
    this.submitted = true;
  }
}
