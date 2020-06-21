import { Injectable } from '@angular/core';
import { ClientService } from './client.service';
import { BehaviorSubject } from 'rxjs';

@Injectable(

)
export class DataService {

  private messageSource = new BehaviorSubject([]);
  currentMessage = this.messageSource.asObservable();

  constructor(private clientService: ClientService) { }

  changeMessage(message: any) {
    debugger;
    this.messageSource.next(message)
  }





postUser(user){
 return this.clientService.postRequest('/create',user);
}
// getallVehicleDetails(token)
// {
//   return this.clientService.getVehicleDetails('/getvehicledetails',token);
// }
getVehicleDetails()
{
  debugger;
  return this.clientService.getVehicleDetails('vehicle/getVehicleList');
}
loginUser(user){
  return this.clientService.postRequest('auth/login', user);
}
}
