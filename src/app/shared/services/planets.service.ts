import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Planet} from '../interfaces';
import {SwapiService} from './swapi.service';
import {catchError, map, switchMap, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  /**
   * Keep planets list
   */
  private _planets$: BehaviorSubject<Planet[]> = new BehaviorSubject<Planet[]>([]);

  /**
   * Access to planets list from outside
   */
  public readonly planets$: Observable<Planet[]> = this._planets$.asObservable();

  /**
   * Planets per page
   */
  public planetsByPage = 10;

  /**
   * Save already loaded pages for caching
   */
  private _alreadyLoadedPages: number[] = [];

  /**
   * Save already loaded planets (ids) for caching
   */
  private _alreadyLoadedPlanets: number[] = [];

  /**
   * Total pages count
   */
  public totalPages: number;

  constructor(
    private _swapi: SwapiService
  ) {
  }

  /**
   * Returns current planets list
   */
  get planets() {
    return this._planets$.getValue();
  }

  /**
   * Get planets by page
   * @page
   */
  public getPlanets(page: number) {
    return this._isPageAlreadyLoaded(page) ?
      this._planets$.pipe(
        map(planets => planets.filter(planet => planet.idx >= (page - 1) * this.planetsByPage && planet.idx < page * this.planetsByPage)),
      ) :
      this.loadByPage(page).pipe(
        switchMap(() => this._planets$),
        map(planets => planets.filter(planet => planet.idx >= (page - 1) * this.planetsByPage && planet.idx < page * this.planetsByPage)),
      );
  }

  /**
   * Get planet by id
   * @page
   */
  public getPlanetById(id: number) {
    return this._isPlanetAlreadyLoaded(id) ?
      this._planets$.pipe(
        map(planets => planets.find(planet => planet.id === id)),
      ) :
      this.loadById(id).pipe(
        switchMap(() => this._planets$),
        map(planets => planets.find(planet => planet.id === id)),
      );
  }

  /**
   * Has page already been loaded
   * @page
   */
  private _isPageAlreadyLoaded(page): boolean {
    return this._alreadyLoadedPages.includes(page);
  }

  /**
   * Has planet already been loaded
   * @id
   */
  private _isPlanetAlreadyLoaded(id): boolean {
    return this._alreadyLoadedPlanets.includes(id);
  }

  /**
   * Load planets by page
   * @page
   */
  public loadByPage(page: number) {
    return this._swapi.getPlanets({page}).pipe(
      catchError(() => of(null)),
      tap(res => {
        this.planetsByPage = res.results.length;
        this.totalPages = res.count / this.planetsByPage;
      }),
      map(this._mapPlanets.bind(this)),
      tap((planets: Planet[]) => {
        const newPlanets = [
          ...this.planets.filter(planet => !planets.map(pl => pl.id).includes(planet.id)),
          ...planets
        ];
        this._planets$.next(newPlanets);
        this._alreadyLoadedPlanets = newPlanets.map(planet => planet.id);
        this._alreadyLoadedPages.push(page);
      })
    );
  }

  /**
   * Load planet by id
   * @id
   */
  public loadById(id: number) {
    return this._swapi.getSinglePlanet(id).pipe(
      catchError(() => of(null)),
      map(this._mapSinglePlanet.bind(this)),
      tap((planet: Planet) => {
        if (!planet) {
          return;
        }
        const newPlanets = [
          ...this.planets,
        ];
        if (!newPlanets.map(pl => pl.id).includes(planet.id)) {
          newPlanets.push(planet);
        }

        this._planets$.next(newPlanets);
        this._alreadyLoadedPlanets = newPlanets.map(pl => pl.id);
      })
    );
  }

  /**
   * Map planets response
   */
  private _mapPlanets(response): Planet[] {
    if (!response) {
      return [];
    }

    return response.results.map(this._mapSinglePlanet.bind(this));
  }

  /**
   * Map single planet
   * @planet
   */
  private _mapSinglePlanet(planet) {
    if (!planet) {
      return null;
    }

    return {
      id: +/[^/]*$/.exec(planet.url.substring(0, planet.url.length - 1))[0],
      idx: +/[^/]*$/.exec(planet.url.substring(0, planet.url.length - 1))[0] - 1,
      name: planet.name,
      rotation_period: planet.rotation_period,
      diameter: planet.diameter,
      climate: planet.climate,
      gravity: planet.gravity,
      terrain: planet.terrain,
      population: planet.population,
      residents: planet.residents.map(residentLink => +/[^/]*$/.exec(residentLink.substring(0, residentLink.length - 1))[0]),
    };
  }
}

