import {Component, Input, OnInit} from '@angular/core';
import {Training} from "../../training.model";

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent implements OnInit {

  @Input() public trainings: Training[];

  constructor() {}

  ngOnInit() {
  }

  onListItemClicked(event, training) {
    console.log(event, training);
  }
}
