import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  constructor() { }
  IsAdminRights():boolean
  {
    return false;
  }
}

