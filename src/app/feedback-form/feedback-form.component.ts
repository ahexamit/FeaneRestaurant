import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css'],
})
export class FeedbackFormComponent implements OnInit {
  public feedbackForm!: FormGroup;
  submitted!: boolean;
  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.feedbackFormData();
  }

  public feedbackFormData(): void {
    this.feedbackForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern("^[a-zA-Z -']+")]],
      email: ['', [Validators.required, Validators.email]],
      age: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.pattern('[2-8]?[0-9]?'),
        ],
      ],
      textarea: ['', [Validators.required]],
    });
  }
  public get f(): { [key: string]: AbstractControl } {
    return this.feedbackForm.controls;
  }
  public submit(): void {
    this.submitted = true;
  }
}
