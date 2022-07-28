import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private role= ['user']

  constructor() { 
    
  }

getRole(){
  return this.role;
} 

}



