import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PlanetsService} from '../../../shared/services/planets.service';
import {map, switchMap, tap} from 'rxjs/operators';
import {ResidentsService} from '../../../shared/services/residents.service';
import {combineLatest, of} from 'rxjs';

@Component({
  selector: 'app-planet-single-page',
  templateUrl: './planet-single-page.component.html',
  styleUrls: ['./planet-single-page.component.css']
})
export class PlanetSinglePageComponent implements OnInit {
  /**
   * Current planet
   */
  public planet$ = this._route.params.pipe(
    switchMap(param => this._planets.getPlanetById(+param.id)),
    map(planet => {
      if (!planet) {
        this._router.navigate(['/', '404']);
        return of(null);
      }

      return {
        ...planet,
        residents: (planet.residents as number[]).length ?
          combineLatest((planet.residents as number[]).map(id => this._residents.getResidentById(id))) :
          of([])
      };
    })
  );

  constructor(
    private _route: ActivatedRoute,
    private _planets: PlanetsService,
    private _residents: ResidentsService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

}
