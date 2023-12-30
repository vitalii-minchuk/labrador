import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { headers } from '../../../mock';
import { EApiMatrixUrls, EEventStatus } from '../../../enums';
import { IEvent } from '../models';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(private http: HttpClient) {

  }

  getMatrixEvents(status: EEventStatus): Observable<IEvent[]>{
    const url = `${environment.apiUrl}${EApiMatrixUrls.MATRIX}${EApiMatrixUrls.EVENTS}`
    const params = { status }

    return this.http.get<IEvent[]>(url, { headers, params })
  }
}
