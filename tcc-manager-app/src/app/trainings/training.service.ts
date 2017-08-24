import { Injectable } from '@angular/core';
import {TRAININGS} from "./training.mock";
import {Training} from "../training.model";
import {ReplaySubject} from "rxjs/ReplaySubject";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/find"
import "rxjs/add/operator/map";

@Injectable()
export class TrainingService {
  //public trainings = TRAININGS;
  private subject = new ReplaySubject<Training[]>(1);
  private singleSubject = new ReplaySubject<Training>(1);

  constructor() {
    this.subject.next(TRAININGS);
  }

  getAll(): Observable<Training[]> {
    return this.subject.asObservable();
  }

  getById(id: number): Observable<Training> {
    return this.getAll().map(trainings => trainings.find(training => training.id === id));
  }
}
