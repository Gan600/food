import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CausesService {

  private apiUrl = 'http://localhost:5000/api/food';

  constructor(private http: HttpClient) {}

  // Fetch the food data
  getCausesData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Insert new food data
  insertCause(cause: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, cause);
  }

  // Update food data
  updateCause(cause: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${cause.hotalid}`, cause);
  }

  // Delete food data
  deleteCause(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
