import {Component, Output} from '@angular/core';
import {Training} from "./training.model";
import {TrainingService} from "./trainings/training.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public trainings: Training[];
  public trainingSelected: Training;

  constructor(public trainingService: TrainingService) {
    this.trainings = trainingService.getAll();
  }

  onTrainingSelected(training: Training) {
    this.trainingSelected = training;
    console.log(training);
  }
}
