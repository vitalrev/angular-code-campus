import { Injectable } from '@angular/core';
import {TRAININGS} from "./training.mock";
import {Training} from "../training.model";
import {ReplaySubject} from "rxjs/ReplaySubject";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/find"
import "rxjs/add/operator/map";
import {Http,Response} from "@angular/http";
import "rxjs/add/operator/catch";

@Injectable()
export class TrainingService {
  //public trainings = TRAININGS;
  private subject = new ReplaySubject<Training[]>(1);
  private singleSubject = new ReplaySubject<Training>(1);

  constructor(private http: Http) {
    this.subject.next(TRAININGS);
  }

  getAll(): Observable<Training[]> {
    //return this.subject.asObservable();
    return this.http.get('api/training')
      .map(this.extractData)
      .catch(this.handleError);
  }

  extractData(res: Response) {
    // fetch API
    let body = res.json();
    // security: wrapped to object with data property
    return body.data;
  }

  handleError(error: any) {
    console.log(error);
    // controlled re-throw
    return Observable.throw("Error occurred");
  }

  getById(id: number): Observable<Training> {
    return this.getAll().map(trainings => trainings.find(training => training.id === id));
  }
}
