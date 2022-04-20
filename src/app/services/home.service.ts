import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enviro } from '../enviro';


@Injectable({
  providedIn: 'root'
})

export class environmentService {
    baseUrl = "http://127.0.0.1:8000/";
    httpHeadears = new HttpHeaders( {'Content-Type': 'application/json'})
  constructor(private http: HttpClient) { }
  getAll(): Observable <any> {
    return this.http.get(this.baseUrl +'api/environments', 
    {headers: this.httpHeadears});
  }
 
  createenvironment(environment: {  title: any; description: any; location: any; }): Observable<any> {
    const body = {title: environment.title , description: environment.description, location: environment.location };
    return this.http.post(this.baseUrl + 'api/environments/', body,
    {headers: this.httpHeadears});
  }
  deleteenvironment(id: string | number): Observable<any> {
    return this.http.delete(this.baseUrl + 'post/' + id ,
    {headers: this.httpHeadears});
  }
  

}

