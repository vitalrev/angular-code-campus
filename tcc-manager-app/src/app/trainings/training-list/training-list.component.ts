import { Component, OnInit } from '@angular/core';
import {Training} from "../../training.model";

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent implements OnInit {

  public trainings: Training[];

  constructor() {
    this.trainings = [
      new Training('Angular2'), new Training("TypeScript"),
      new Training("AngularJS"), new Training("React")
    ];
  }

  ngOnInit() {
  }

}
