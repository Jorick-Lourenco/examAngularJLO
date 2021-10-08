import { Component, OnInit } from '@angular/core';
import {Restaurant} from "../../models/restaurant.model";
import {NgForm} from "@angular/forms";
import {Eval} from "../../models/Eval.model";


@Component({
  selector: 'app-evaluation-form',
  templateUrl: './evaluation-form.component.html',
  styleUrls: ['./evaluation-form.component.css']
})
export class EvaluationFormComponent implements OnInit {

  public eval: Eval = {
    evaluateur:"",
    commentaire:"",
    etoiles = 0
  }

  constructor() { }

  ngOnInit(): void {
  }
  public submit(): void {
    if (this.form && this.form.valid) {
      this.evaluationAdded.emit(this.evaluation);
      this.restaurant = {
        evaluateur:"",
        commentaire"",
        etoiles = 0
      }
    }
  }

}
