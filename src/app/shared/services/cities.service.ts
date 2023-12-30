import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { headers } from '../../mock';

@Injectable()
export class CitiesService {
  constructor(private http: HttpClient) { }

  public getAllCities(): Observable<Array<any>>{
    return this.http.get<Array<any>>(`${environment.apiUrl}/CityFilter/get-all`, { headers })
  }
}
