import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingListComponent } from './training-list/training-list.component';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import {FormsModule} from "@angular/forms";
import {TrainingService} from "./training.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    TrainingService
  ],
  declarations: [TrainingListComponent, TrainingDetailsComponent],
  exports: [TrainingListComponent, TrainingDetailsComponent]
})
export class TrainingsModule { }
