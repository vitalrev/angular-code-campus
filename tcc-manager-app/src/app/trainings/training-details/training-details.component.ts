import {Component, Input, OnInit} from '@angular/core';
import {Training} from "../../training.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {startOfToday,startOfDay,addDays,isFuture,isToday,isBefore} from "date-fns";

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.scss']
})
export class TrainingDetailsComponent implements OnInit {
  @Input() public training: Training;
  public form: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(this.training.name, Validators.required),
      nextRun: new FormControl(this.training.nextRun),
      description: new FormControl(this.training.description, Validators.minLength(10))
    }, this.validate );
  }

  validate = (group: FormGroup) => {
    return (this.training.discontinued && isFuture(group.value.nextRun)) ? { discontinuedCantRunning: true } : null;
  }

  onSubmit() {
    Object.assign(this.training, this.form.value);
    this.goBack();
  }

  goBack() {
    const link = [".."]; // one level up
    this.router.navigate(link);
  }
}
