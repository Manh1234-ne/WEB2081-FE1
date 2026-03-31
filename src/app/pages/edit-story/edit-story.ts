import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-story',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-story.html',
  styleUrl: './edit-story.css',
})
export class EditStory {
  editForm: FormGroup;

  loading = false;
  error = '';
  success = '';

  id: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.route.snapshot.paramMap.get('id');

    this.editForm = this.fb.group({
      title: '',
      author: '',
      views: ''
    })
  }

  ngOnInit() {
      this.http.get(`http://localhost:3000/stories/${this.id}`).subscribe({
        next: (data: any) => {
          console.log(data);
          this.editForm.patchValue(data)
        }
      })
  }


  submitForm() {
    console.log(this.editForm.value);
    
    this.loading = true;
    this.error = '';
    this.success = '';

    const data = this.editForm.value;
    this.http.put(`http://localhost:3000/stories/${this.id}`, data).subscribe({
      next: () => {
        this.loading = false;
        this.success = "Edit OKE"

        this.router.navigateByUrl('/stories')
      }
    })
  }


}
