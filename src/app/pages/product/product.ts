import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  imports: [ReactiveFormsModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  addProduct: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addProduct = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(0)]],
      category: ['', Validators.required]
    })
  }

  get name() {
  return this.addProduct.get('name');
}
  get price() {
  return this.addProduct.get('price');
}

  submitForm() {
    console.log(this.addProduct.value);

  }
}
