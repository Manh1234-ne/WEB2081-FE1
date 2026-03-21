import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  imports: [ReactiveFormsModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  addProduct: FormGroup;

  loading = false;
  error = '';
  success = ''

  constructor(
    private fb: FormBuilder,
    private http: HttpClient

  ) {
    this.addProduct = this.fb.group({
      name: '',
      price: 0,
      category: '',
      views: '',
    })
  }

  
  submitForm() {
    console.log(this.addProduct.value);

    const data = this.addProduct.value;
    this.http.post('http://localhost:3000/products',data).subscribe({
      next: () => {
        alert('Product add successfully');
      },
      error: () => {
        this.loading = false;
        this.error = 'Co loi xay ra'
      }
    })

  }


}
