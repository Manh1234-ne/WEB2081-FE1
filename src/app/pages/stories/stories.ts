import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-stories',
  imports: [RouterLink],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories implements OnInit {
  stories: any[] = []

  loading = false;
  error = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getStories();
  }

  getStories() {
    this.loading = true;
    this.error = '';

    this.http.get<any[]>('http://localhost:3000/stories').subscribe({
      next: (data) => {
        this.loading = false;
        this.stories = data;
      },
      error: () => {
        this.loading = false;
        this.error = 'Không thể tải dữ liệu';
      },
    })
  }

  handleDelete(id: number) {
    const confirmDelete = confirm('Bạn chắc chắn muốn xóa nó Ư')
    if (!confirmDelete) return

    this.http.delete(`http://localhost:3000/stories/${id}`).subscribe({
      next: () => {
        this.stories = this.stories.filter((story) => story.id !== id);
        alert('Xoa OK');
      },
      error: () => {
        alert('Xoa chua OK');
      }
    })
  }
}
