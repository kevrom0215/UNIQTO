import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  // Create our form
  myForm = this.myFormBuilder.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required, Validators.pattern('[- +()0-9]+')]],
    message: ['', Validators.required]
  });


  // Inject FormBuilder
  constructor(private myFormBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  // Getters
  get fullName() {
    return this.myForm.get('fullName');
  }

  get email() {
    return this.myForm.get('email');
  }

  get phoneNumber() {
    return this.myForm.get('phoneNumber');
  }

  get message() {
    return this.myForm.get('message');
  }
}
