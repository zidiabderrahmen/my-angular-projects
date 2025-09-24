import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapG1 } from "./face-snap-g1/face-snap-g1";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FaceSnapG1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projetTp2');
}
