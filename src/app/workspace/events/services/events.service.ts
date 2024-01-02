import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { headers } from '../../../mock';
import { EApiMatrixUrls, EEventStatus } from '../../../enums';
import { ICommonMatrixEvent, ICreateMatrixEventInput, ISingleMatrixEvent } from '../models';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(private http: HttpClient) {

  }

  getMatrixEvents(status: EEventStatus): Observable<ICommonMatrixEvent[]>{
    const url = `${environment.apiUrl}/${EApiMatrixUrls.MATRIX}/${EApiMatrixUrls.EVENTS}`
    const params = { status }

    return this.http.get<ICommonMatrixEvent[]>(url, { headers, params })
  }

  getMatrixEventById(id: string): Observable<ISingleMatrixEvent>{
    const url = `${environment.apiUrl}/${EApiMatrixUrls.MATRIX}/${id}`

    return this.http.get<ISingleMatrixEvent>(url, { headers })
  }

  createMatrixEvent(input: any) {
    const url = `${environment.apiUrl}/${EApiMatrixUrls.MATRIX}`

    return this.http.post<any>(url, input, { headers })
  }
}
