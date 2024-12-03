import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogApiService {
  private apiUrl = 'https://dogapi.dog/api/v2/facts'; // URL para a API de fatos sobre cães

  constructor(private http: HttpClient) {}

  getRandomFact(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
