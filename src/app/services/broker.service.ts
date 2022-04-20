import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class brokerService {
    baseUrl = "http://127.0.0.1:8000/";
    httpHeadears = new HttpHeaders( {'Content-Type': 'application/json'})
  constructor(private http: HttpClient) {}
  getAll(): Observable <any> {
    return this.http.get(this.baseUrl +'api/broker', 
    {headers: this.httpHeadears});
  }
 
  
createbroker(broker: {  name: any; server: any; port: any; }): Observable<any> {
    const body = {name: broker.name , server: broker.server, port: broker.port };
    return this.http.post(this.baseUrl + 'api/broker', body,
    {headers: this.httpHeadears});
  }
  deletebroker(id: string | number): Observable<any> {
    return this.http.delete(this.baseUrl + 'api/delete/' + id +'/' ,
    {headers: this.httpHeadears});
  }
}