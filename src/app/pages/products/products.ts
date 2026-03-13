import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
})
export class Products { }
