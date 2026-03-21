import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


export interface Story {
  id: number,
  name: string,
  price: number,
  category: string,
  views: number
}
@Component({
  selector: 'app-products',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
})

export class Products implements OnInit {
  products: Story[] = []

  loading = false;
  error = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getStories();
  }

  getStories() {
    this.loading = true;
    this.error = '';

    this.http.get<Story[]>('http://localhost:3000/products').subscribe({
      next: (data) => {
        this.loading = false;
        this.products = data;
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

    this.http.delete(`http://localhost:3000/products/${id}`).subscribe({
      next: () => {
        this.products = this.products.filter((product) => product.id !== id);
        alert('Xoa OK');
      },
      error: () => {
        alert('Xoa chua OK');
      }
    })
  }
}