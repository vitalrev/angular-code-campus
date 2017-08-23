import { Injectable } from '@angular/core';
import {TRAININGS} from "./training.mock";
import {Training} from "../training.model";

@Injectable()
export class TrainingService {
  public trainings = TRAININGS;

  constructor() {  }

  getAll(): Training[] {
    return this.trainings;
  }
}
