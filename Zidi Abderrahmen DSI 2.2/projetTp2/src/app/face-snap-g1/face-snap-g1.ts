import { Component } from '@angular/core';

@Component({
  selector: 'app-face-snap-g1',
  imports: [],
  templateUrl: './face-snap-g1.html',
  styleUrl: './face-snap-g1.css'
})
export class FaceSnapG1 {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;

  ngOnInit() {
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis tout petit !'
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
  }
}
