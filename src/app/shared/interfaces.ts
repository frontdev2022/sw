import {Observable} from 'rxjs';

export interface Planet {
  id: number;
  idx: number;
  name: string;
  rotation_period: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  population: string;
  residents: number[] | Observable<Resident[]>;
}

export interface Resident {
  id: number;
  name: string;
  height: number;
  mass: number;
  gender: string;
}
