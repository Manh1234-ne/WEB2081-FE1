import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-story',
  imports: [ReactiveFormsModule],
  templateUrl: './add-story.html',
  styleUrl: './add-story.css',
})
export class AddStory {
  addForm: FormGroup; //ten bien addFrom

  constructor(private fb: FormBuilder){
    this.addForm = this.fb.group({
      title: '', // form  co input title
      author: '',
      views: 0
    });
  }

  submitForm(){
    console.log(this.addForm.value);
    
  }
}
