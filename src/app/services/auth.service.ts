import { Injectable } from '@angular/core';
import { ClientService } from './client.service';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private clientService: ClientService) { }

  token: string = '';
  login(token) {
  
    localStorage.setItem('token', token);
    this.token = token; 
    debugger;
  }

  getToken(){
    return this.token;
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if(undefined!=localStorage.getItem('token') && 0!=localStorage.getItem('token').length){
      return true;
    }else{
      return true;
    }

  }
}
