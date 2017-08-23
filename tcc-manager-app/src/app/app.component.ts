import {Component, Output} from '@angular/core';
import {Training} from "./training.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public trainings: Training[];
  public trainingSelected: Training;

  constructor() {
    this.trainings = [
      new Training('Angular2', "cool training", "assets/images/trainings/images-3.jpeg"),
      new Training("TypeScript", "Programming language for Angular", "assets/images/trainings/images-4.jpeg"),
      new Training("AngularJS", "oldtimer", "assets/images/trainings/images-5.jpeg", true),
      new Training("React", "letzter Dreck", "assets/images/trainings/images-6.jpeg")
    ];
  }

  onTrainingSelected(training: Training) {
    this.trainingSelected = training;
    console.log(training);
  }
}
