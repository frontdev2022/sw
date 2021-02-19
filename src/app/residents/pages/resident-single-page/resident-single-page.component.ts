import { Component, OnInit } from '@angular/core';
import {map, switchMap, tap} from "rxjs/operators";
import {combineLatest, of} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {PlanetsService} from "../../../shared/services/planets.service";
import {ResidentsService} from "../../../shared/services/residents.service";

@Component({
  selector: 'app-resident-single-page',
  templateUrl: './resident-single-page.component.html',
  styleUrls: ['./resident-single-page.component.css']
})
export class ResidentSinglePageComponent implements OnInit {
  /**
   * Current resident
   */
  public resident$ = this._route.params.pipe(
    switchMap(param => this._residents.getResidentById(+param.id)),
    tap((resident) => {
      if (!resident) {
        this._router.navigate(['/', '404']);
        return of(null);
      }
    })
  );

  constructor(
    private _route: ActivatedRoute,
    private _residents: ResidentsService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

}
