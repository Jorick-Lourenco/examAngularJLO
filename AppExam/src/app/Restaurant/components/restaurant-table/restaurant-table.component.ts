import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from "../../models/restaurant.model";
import {Eval} from "../../models/Eval.model";

@Component({
  selector: 'app-restaurant-table',
  templateUrl: './restaurant-table.component.html',
  styleUrls: ['./restaurant-table.component.css']
})
export class RestaurantTableComponent implements OnInit {

  @Input() restaurants: Restaurant[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
