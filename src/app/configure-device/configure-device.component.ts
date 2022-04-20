import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogConfig } from  '@angular/material/dialog';
import { BrokerComponent } from '../broker/broker.component';

interface protocole {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-configure-device',
  templateUrl: './configure-device.component.html',
  styleUrls: ['./configure-device.component.css']
})


export class ConfigureDeviceComponent implements OnInit {

  protocoles: protocole[] = [
    {value: 'MQTT-0', viewValue: 'MQTT'},
    {value: 'HTTP-1', viewValue: 'HTTP'},
    {value: 'coap-2', viewValue: 'coap'},
  ];
  constructor(private  dialogRef : MatDialog) { }

  ngOnInit(): void {
  }
 
  openDialog(){
     
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialogRef.open(BrokerComponent,dialogConfig);
   
  }
}

