import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingListComponent } from './training-list/training-list.component';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TrainingService} from "./training.service";
import { TakePlaceSoonPipe } from './take-place-soon.pipe';
import {TrainingListRouteComponent} from "./training-list-route/training-list-route.component";
import {RouterModule} from "@angular/router";
import {TrainingDetailsRouteComponent} from "./training-details-route/training-details-route.component";
import {DiscontinuedValidator} from "./training-details/discontinued-validator";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [
    TrainingService
  ],
  declarations: [
    TrainingListComponent,
    TrainingDetailsComponent,
    TakePlaceSoonPipe,
    TrainingListRouteComponent,
    TrainingDetailsRouteComponent],
  exports: [TrainingListComponent, TrainingDetailsComponent]
})
export class TrainingsModule { }
