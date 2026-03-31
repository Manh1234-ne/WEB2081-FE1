import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-story',
  imports: [ReactiveFormsModule],
  templateUrl: './add-story.html',
  styleUrl: './add-story.css',
})
export class AddStory {
  addForm: FormGroup; //ten bien addFrom

  loading = false;
  error = '';
  success = ''

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.addForm = this.fb.group({
      title: '', // form  co input title
      author: '',
      views: 0
    });
  }

  

  submitForm() {
    this.loading = true;
    this.error = '',
      this.success = '';
    console.log(this.addForm.value);
    
    const data = this.addForm.value;
    this.http.post('http://localhost:3000/stories', data).subscribe({
      next: () => {
        alert('Story add successfully');

        this.router.navigateByUrl('/stories')

      },
      error: () => {
        this.loading = false;
        this.error = 'Co loi xay ra'
      }
    })
  }
}
