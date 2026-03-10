import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'my-app'; // ko dung const hay let
  fullName = 'Nguyễn Duy Mạnh';
  age = 20


  // Method: function
  handleClick() {
    console.log('hello');
    alert('Bạn đã click button');
  }
}
