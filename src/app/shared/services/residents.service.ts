import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Planet, Resident} from '../interfaces';
import {SwapiService} from './swapi.service';
import {catchError, map, switchMap, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResidentsService {
  /**
   * Keep planets list
   */
  private _residents$: BehaviorSubject<Resident[]> = new BehaviorSubject<Resident[]>([]);

  /**
   * Access to planets list from outside
   */
  public readonly residents$: Observable<Resident[]> = this._residents$.asObservable();

  /**
   * Save already loaded residents (ids) for caching
   */
  private _alreadyLoadedResidents: number[] = [];

  constructor(
    private _swapi: SwapiService
  ) {
  }

  /**
   * Returns current residents list
   */
  get residents() {
    return this._residents$.getValue();
  }

  /**
   * Get resident by id
   * @page
   */
  public getResidentById(id: number) {
    return this._isResidentAlreadyLoaded(id) ?
      this._residents$.pipe(
        map(residents => residents.find(res => res.id === id)),
      ) :
      this.loadById(id).pipe(
        switchMap(() => this._residents$),
        map(residents => residents.find(res => res.id === id)),
      );
  }

  /**
   * Load resident by id
   * @id
   */
  public loadById(id: number) {
    return this._swapi.getSingleResident(id).pipe(
      catchError(() => of(null)),
      map(this._mapSingleResident.bind(this)),
      tap((resident: Resident) => {
        if (!resident) {
          return;
        }

        const newResidents = [
          ...this.residents,
        ];

        if (!newResidents.map(res => res.id).includes(resident.id)) {
          newResidents.push(resident);
        }

        this._residents$.next(newResidents);
        this._alreadyLoadedResidents = newResidents.map(res => res.id);
      })
    );
  }

  /**
   * Has planet already been loaded
   * @id
   */
  private _isResidentAlreadyLoaded(id): boolean {
    return this._alreadyLoadedResidents.includes(id);
  }

  /**
   * Map single resident
   * @planet
   */
    private _mapSingleResident(resident) {
    if (!resident) {
      return null;
    }

    return {
      id: +/[^/]*$/.exec(resident.url.substring(0, resident.url.length - 1))[0],
      name: resident.name,
      height: resident.height,
      mass: resident.mass,
      gender: resident.gender
    };
  }
}
