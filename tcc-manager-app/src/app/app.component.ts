import {Component, OnDestroy, OnInit, Output} from '@angular/core';
import {Training} from "./training.model";
import {TrainingService} from "./trainings/training.service";
import {Observable} from "rxjs/Observable";
import {Subscriber} from "rxjs/Subscriber";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  public trainings: Training[];
  public trainingSelected: Training;
  private subscribtion: Subscription;

  constructor(public trainingService: TrainingService) {
  }

  ngOnInit(): void {
    const obs = this.trainingService.getAll();
    this.subscribtion = obs.subscribe( (next) => {
      this.trainings = next;
    });
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }

  onTrainingSelected(training: Training) {
    this.trainingSelected = training;
    console.log(training);
  }
}
