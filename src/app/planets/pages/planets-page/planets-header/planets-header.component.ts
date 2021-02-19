import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-planets-header',
  templateUrl: './planets-header.component.html',
  styleUrls: ['./planets-header.component.css']
})
export class PlanetsHeaderComponent implements OnInit {
  /**
   * Current page
   */
  @Input() page: number;

  constructor() { }

  ngOnInit(): void {
  }

}
