import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-stories',
  imports: [RouterLink],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories {
  stories = [
    {
      title: 'Dragon Ball',
      author: 'Akira Toriyama',
      views: 100000000,
      year: '1984',
      imageUrl: 'https://th.bing.com/th/id/OIP.MHFhGMp1MQ3aXAebMX5zEgHaHa?w=194&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
      genre: 'Action'
    },
    {
      title: 'Naruto',
      author: 'Masashi Kishimoto',
      views: 90000,
      year: '1999',
      imageUrl: 'https://th.bing.com/th/id/OIP.MVsEumI3TB0o-qauNPLs4AHaK-?w=205&h=304&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
      genre: 'Shonen'
    },
    {
      title: 'Doraemon',
      author: 'Fujiko F. Fujio',
      views: 70000,
      year: '1969',
      imageUrl: 'https://th.bing.com/th/id/OIP.DZe1nRipSiUvbDL_ZmlVxQHaLc?w=143&h=220&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
      genre: 'Comedy'
    },
    {
      title: 'Attack On Titan',
      author: 'Hajime Isayama',
      views: 95000,
      year: '2009',
      imageUrl: 'https://th.bing.com/th/id/OIP.L5Bw8_vj0rLTxQJ3JZlpRAHaHa?w=201&h=201&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
      genre: 'Dark Fantasy'
    },
    {
      title: 'Bleach',
      author: 'Tite Kubo',
      views: 72000,
      year: '2001',
      imageUrl: 'https://th.bing.com/th/id/OIP.E-J1UC_go8izCXI5unEv8AHaKX?w=126&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
      genre: 'Shonen'
    },
  ]


  handleClick(){
    alert('Ban da click')
  }
}
