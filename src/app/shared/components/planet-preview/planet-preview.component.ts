import {Component, Input, OnInit} from '@angular/core';
import {Planet} from '../../interfaces';

@Component({
  selector: 'app-planet-preview',
  templateUrl: './planet-preview.component.html',
  styleUrls: ['./planet-preview.component.css']
})
export class PlanetPreviewComponent implements OnInit {
  /**
   * Current planet
   */
  @Input() planet: Planet;

  constructor() { }

  ngOnInit(): void {
  }

}
