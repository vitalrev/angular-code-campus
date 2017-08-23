import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Training} from "../../training.model";

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent implements OnInit {

  @Input() public trainings: Training[];
  @Output() public trainingSelected = new EventEmitter<Training>();
  public selectedTraining: Training;

  constructor() {}

  ngOnInit() {
  }

  onListItemClicked(event, training) {
    console.log(event, training);
    //debugger;
    this.selectedTraining = training;
    this.trainingSelected.emit(training);
  }
}
