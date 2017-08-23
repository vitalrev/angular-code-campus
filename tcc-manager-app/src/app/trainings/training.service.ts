import { Injectable } from '@angular/core';
import {TRAININGS} from "./training.mock";
import {Training} from "../training.model";
import {ReplaySubject} from "rxjs/ReplaySubject";
import {Observable} from "rxjs/Observable";

@Injectable()
export class TrainingService {
  //public trainings = TRAININGS;
  private subject = new ReplaySubject<Training[]>(1);

  constructor() {
    this.subject.next(TRAININGS);
  }

  getAll(): Observable<Training[]> {
    return this.subject.asObservable();
  }
}
