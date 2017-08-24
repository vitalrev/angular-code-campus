import {Routes} from "@angular/router";
import {TrainingListRouteComponent} from "./trainings/training-list-route/training-list-route.component";
import {TrainingDetailsRouteComponent} from "./trainings/training-details-route/training-details-route.component";


export let routes: Routes = [
  { path: "trainings", component: TrainingListRouteComponent },
  { path: "training/:id", component: TrainingDetailsRouteComponent },
  { path: "**", component: TrainingListRouteComponent }
];
