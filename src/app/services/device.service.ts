import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class deviceService {
  baseUrl = "http://127.0.0.1:8000/";
  httpHeadears = new HttpHeaders( {'Content-Type': 'application/json'})
constructor(private http: HttpClient) {}
getAll(id:any ): Observable <any> {
    return this.http.get(this.baseUrl +'get/device/' +id , 
    {headers: this.httpHeadears});
  }

createdevice(device : {DeviceName:any ; DeviceType:any ; DeviceKey:any ; DeviceDescription :any ; DeviceEnvID:any } ): Observable<any> {
  const body = {DeviceName: device.DeviceName , DeviceType: device.DeviceType, DeviceKey: device.DeviceKey , DeviceDescription: device.DeviceDescription, DeviceEnvID :device.DeviceEnvID};
  return this.http.post(this.baseUrl + 'api/device/', body,
  {headers: this.httpHeadears});
}
getbyid(id :any): Observable <any> {
  return this.http.get(this.baseUrl +'get/device/'+id +'/', 
  {headers: this.httpHeadears});
}

deletedevice(id: string | number): Observable<any> {
  return this.http.delete(this.baseUrl + 'get/device/' + id +'/' ,
  {headers: this.httpHeadears});
}
}

