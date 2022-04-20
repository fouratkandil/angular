import { Component, OnInit } from '@angular/core';
import { deviceService}   from '../services/device.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent {

  device =[{DeviceName:''},{DeviceDescription:''},{DeviceKey:''},{DeviceType:''},{DeviceEnvID:''}];

  selecteddevice;
  constructor(private devService: deviceService,public dialogRef: MatDialogRef<AddDeviceComponent> ) { 
    this.selecteddevice ={id: -1, DeviceName:'',DeviceDescription:'',DeviceKey:'',DeviceType:'',DeviceEnvID:''  }
  }
  createdevice = () => {
    this.devService.createdevice(this.selecteddevice).subscribe(
      data => {
        this.device.push(data);
      },
    );
   
    
  }
  onClose() {
 
    this.dialogRef.close() ;
  }}
