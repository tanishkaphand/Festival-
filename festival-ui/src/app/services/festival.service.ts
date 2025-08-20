import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Festival } from '../models/festival';

@Injectable({ providedIn: 'root' })
export class FestivalService {
  private base = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  list(): Observable<Festival[]> {
    return this.http.get<Festival[]>(this.base);
  }

  create(festival: Festival): Observable<Festival> {
    return this.http.post<Festival>(this.base, festival);
  }

  update(festival: Festival): Observable<Festival> {
    return this.http.put<Festival>(this.base, festival);
  }

  get(id: number): Observable<Festival> {
    return this.http.get<Festival>(`${this.base}/${id}`);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/${id}`);
  }
}
