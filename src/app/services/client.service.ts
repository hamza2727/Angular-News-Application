import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  postRequest(route, object) {
    return this.http.post(environment.API_HOST + route, object);
  }

  getVehicleDetails(route) {
    debugger;
    return this.http.get(environment.API_HOST+route)
  }
}
