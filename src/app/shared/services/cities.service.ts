import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class CitiesService {
  constructor(private http: HttpClient) { }

  public getAllCities(): Observable<Array<any>>{
    return this.http.get<Array<any>>(`${environment.apiUrl}/CityFilter/get-all`, {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjQxYjVlN2YwLWVlZDItNDAzYS1iMzg3LTU4MWM2NGZkOGU3MSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJkdGVzdGFteGdoZGlwIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoidXNlckBleGFtcGxlLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3VzZXJzdGF0dXMiOiJTdGFmZiIsImp0aSI6IjU2ZWZiODM2LTEyYmUtNGFmNC05ZGU5LWUxZDAyNDgwOWFmMCIsIkF2YXRhciI6Imh0dHBzOi8vcGxhdGZvcm0taW1nLnMzLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tL1VzZXJzL2M2Y2MzZDFiLTA3YTctNGVmOC05NTU2LTZiNDEzNjY4MTlkMi5wbmciLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJTdXBlckFkbWluIiwiZXhwIjoxNzAzOTAwNTIxLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo0NDM4NSIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJ9.90K0uQZ7D57yk0OW5esR5NIK4rfILJs44VKhjpLTRjs'
      }
    })
  }
}
