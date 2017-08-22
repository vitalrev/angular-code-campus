import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingListComponent } from './training-list/training-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TrainingListComponent],
  exports: [TrainingListComponent]
})
export class TrainingsModule { }
