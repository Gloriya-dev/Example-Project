import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = 'https://api.escuelajs.co/api/v1/categories';
  constructor(private http: HttpClient) {}

  getCategory(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((category) => category || []),
      catchError((error) => {
        console.log(error);
        return [];
      })
    );
  }
}
