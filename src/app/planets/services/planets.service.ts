import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Planet} from '../../shared/interfaces';
import {SwapiService} from '../../shared/services/swapi.service';
import {map, tap} from 'rxjs/operators';

@Injectable()
export class PlanetsService {
  /**
   * Keep planets list
   */
  private _planets$: BehaviorSubject<Planet[]> = new BehaviorSubject<Planet[]>([]);

  /**
   * Access to planets list from outside
   */
  public readonly planets$: Observable<Planet[]> = this._planets$.asObservable();

  constructor(
    private _swapi: SwapiService
  ) {
    this.loadByPage(1).subscribe();
  }

  /**
   * Get planets list by page
   */
  public getByPage() {

  }

  /**
   * Returns current planets list
   */
  get planets() {
    return this._planets$.getValue();
  }

  /**
   * Load planets by page
   */
  public loadByPage(page: number) {
    return this._swapi.getPlanets({page}).pipe(
      map(this._mapPlanets.bind(this)),
      tap((planets: Planet[]) => {
        const newPlanets = [
          ...this.planets.filter(planet => !planets.map(pl => pl.id).includes(planet.id)),
          ...planets
        ];
        this._planets$.next(newPlanets);
      })
    );
  }

  /**
   * Map planets response
   */
  private _mapPlanets(response): Planet[] {
    return response.results.map(planet => {
      return {
        id: +/[^/]*$/.exec(planet.url.substring(0, planet.url.length - 1))[0],
        name: planet.name,
        rotation_period: planet.rotation_period,
        diameter: planet.diameter,
        climate: planet.climate,
        gravity: planet.gravity,
        terrain: planet.terrain,
        population: planet.population,
        residents: planet.residents.map(residentLink => +/[^/]*$/.exec(residentLink.substring(0, residentLink.length - 1))[0]),
      };
    });
  }
}
