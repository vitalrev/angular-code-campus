import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute, Router} from "@angular/router";
import {TrainingService} from "../training.service";
import "rxjs/add/operator/switchMap";
import {Training} from "../../training.model";

@Component({
  selector: 'app-training-details-route',
  templateUrl: './training-details-route.component.html',
  styleUrls: ['./training-details-route.component.scss']
})
export class TrainingDetailsRouteComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public trainingSelected: Training;

  constructor(private route: ActivatedRoute, public trainingService: TrainingService) { }

  ngOnInit() {
    this.subscription = this.route.params
      .map(params => parseInt(params['id']))
      .switchMap(id => this.trainingService.getById(id))
      .subscribe(t => this.trainingSelected = t);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
