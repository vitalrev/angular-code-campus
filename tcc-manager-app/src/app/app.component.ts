import { Component } from '@angular/core';
import { Training } from './training.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Schulung';
  public trainings: Training[];

  constructor() {
    this.trainings = [
      new Training('Angular'), new Training("TypeScript"),
      new Training("AngularJS"), new Training("React")
      ];
    }
}
