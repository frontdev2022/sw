import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  constructor(
    private _http: HttpClient
  ) {
  }

  /**
   * GET /api/planets
   */
  public getPlanets(params) {
    return this._http.get(environment.apiHost + '/planets', {params});
  }

  /**
   * GET /api/planet/:id
   * @id
   */
  public getSinglePlanet(id) {
    return this._http.get(environment.apiHost + '/planets/' + id);
  }

  /**
   * GET /api/people/:id
   * @id
   */
  public getSingleResident(id) {
    return this._http.get(environment.apiHost + '/people/' + id);
  }
}
