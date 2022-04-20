import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AddenvironmentComponent } from './addenvironment/addenvironment.component';
import { ListDeviceComponent } from './list-device/list-device.component';
import { BrokerComponent } from './broker/broker.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add', component: AddenvironmentComponent },
  { path: 'list', component: ListDeviceComponent },
  {path:'broker', component: BrokerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
