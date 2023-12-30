import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { EApiConsoleUrls } from '../../../enums/api-urls.enum';
import { headers } from '../../../mock';
import { IConsoleMatrixInfo } from '../models';

@Injectable({providedIn: 'root'})
export class ConsoleService {
  constructor(private http: HttpClient) { }

  public getConsoleMatrices(): Observable<IConsoleMatrixInfo[]> {
    const url = `${environment.apiUrl}${EApiConsoleUrls.CONSOLE}${EApiConsoleUrls.MATRICES}`

    return this.http.get<IConsoleMatrixInfo[]>(url, { headers })
  }
}
