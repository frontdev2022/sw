import { Component, OnInit } from '@angular/core';
import {PlanetsService} from '../../../shared/services/planets.service';
import {Observable} from 'rxjs';
import {Planet} from '../../../shared/interfaces';
import {delay, tap} from 'rxjs/operators';

@Component({
  selector: 'app-planets-page',
  templateUrl: './planets-page.component.html',
  styleUrls: ['./planets-page.component.css']
})
export class PlanetsPageComponent implements OnInit {
  /**
   * Current page
   */
  public currentPage = 0;

  /**
   * List of planets by page observables
   */
  public list$: Observable<Planet[]>[] = [];

  /**
   * Is loading more flag
   */
  public isLoadingMore: boolean;

  constructor(
    public planets: PlanetsService
  ) { }

  ngOnInit(): void {
    this.loadNext();
  }

  /**
   * Load next page
   */
  loadNext() {
    this.isLoadingMore = true;
    this.currentPage++;
    this.list$.push(
      this.planets.getPlanets(this.currentPage)
        .pipe(
          delay(0),
          tap(() => this.isLoadingMore = false)
        )
    );
  }
}
