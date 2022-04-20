import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  message: number | undefined ;
  constructor() { }
 
  setmessage(data:any){this.message=data}
  getmessage(){return this.message}
  

}
