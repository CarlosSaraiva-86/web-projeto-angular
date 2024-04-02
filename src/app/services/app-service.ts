import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor(private http: HttpClient) { }
  baseUrl: string = environment.baseUrl;

  Get(url: string): Observable<any>{
    return this.http.get<any>(this.baseUrl + 'api/' + url);
  }
  Post(url: string, object: any): Observable<any>{
    return this.http.post<any>(this.baseUrl + 'api/' + url, object);
  }

}
