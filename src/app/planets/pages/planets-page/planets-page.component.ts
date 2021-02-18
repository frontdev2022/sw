import { Component, OnInit } from '@angular/core';
import {PlanetsService} from '../../services/planets.service';

@Component({
  selector: 'app-planets-page',
  templateUrl: './planets-page.component.html',
  styleUrls: ['./planets-page.component.css']
})
export class PlanetsPageComponent implements OnInit {

  constructor(
    private _planets: PlanetsService
  ) { }

  ngOnInit(): void {
  }

}
