import {Component, Input, OnInit} from '@angular/core';
import {Resident} from '../../interfaces';

@Component({
  selector: 'app-resident-preview',
  templateUrl: './resident-preview.component.html',
  styleUrls: ['./resident-preview.component.css']
})
export class ResidentPreviewComponent implements OnInit {

  /**
   * Current resident
   */
  @Input() resident: Resident;
  constructor() { }

  ngOnInit(): void {
  }

}
