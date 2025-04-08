import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CausesService {
  private apiUrl = 'api/causes'; // Adjust this URL to match your backend API endpoint

  constructor(private http: HttpClient) { }

  getCausesData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  insertCause(cause: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, cause);
  }

  updateCause(cause: any): Observable<any> {
    const url = `${this.apiUrl}/${cause.id}`; // Adjust the URL to include the cause ID
    return this.http.put<any>(url, cause);
  }

  deleteCause(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`; // Adjust the URL to include the cause ID
    return this.http.delete<any>(url);
  }
}
