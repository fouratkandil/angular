import { Component, OnInit} from '@angular/core';

import { MatDialog, MatDialogConfig } from  '@angular/material/dialog';
import { AddDeviceComponent } from '../add-device/add-device.component';
import { dev } from '../dev';

import { SharedService } from '../services/shared.service';
import { environmentService } from 'src/app/services/home.service';
import { deviceService } from '../services/device.service';
import { BehaviorSubject } from 'rxjs';
import { BrokerComponent } from '../broker/broker.component';
import { ConfigureDeviceComponent } from '../configure-device/configure-device.component';

@Component({
  selector: 'app-list-device',
  
  templateUrl: './list-device.component.html',
  styleUrls: ['./list-device.component.css']

})
export class ListDeviceComponent implements OnInit { 


  /*selectedenvironment;*/

 message :any ;
  constructor(private devService: deviceService, private  dialogRef : MatDialog ,private sharedService:SharedService )  {  
    }
    
   
    openDialog(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "50%";
      this.dialogRef.open(AddDeviceComponent,dialogConfig);
    }
    Configure()
    {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "50%";
      this.dialogRef.open(ConfigureDeviceComponent,dialogConfig);
    }
    dev :any ;
   ngOnInit():void{
     this.message=this.sharedService.getmessage()

     this.devService.getbyid(this.message).subscribe((data)=>{
      this.dev =data;
      
      
   
   })}

   deletedevice (id :any) {
    this.devService.deletedevice(id).subscribe(()=> {
        this.dev=this.dev.filter((u:any)=> u!==id);
        
      })}

  
     
  

   
    }
  


  