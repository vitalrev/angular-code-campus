import {Component, OnDestroy, OnInit} from '@angular/core';
import {TrainingService} from "../training.service";
import {Training} from "../../training.model";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-training-list-route',
  templateUrl: './training-list-route.component.html',
  styleUrls: ['./training-list-route.component.scss']
})
export class TrainingListRouteComponent implements OnInit, OnDestroy {

  public trainings: Training[];
  public trainingSelected: Training;
  private subscribtion: Subscription;

  constructor(public trainingService: TrainingService) { }

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
