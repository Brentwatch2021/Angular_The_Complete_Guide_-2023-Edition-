import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public activeUsers:string[] = ['chris', 'elma']
  public inactiveUsers:string[] = ['Druk','Druk2']

  constructor() { }

  onSetToInactive(id:number)
{
  this.inactiveUsers.push(this.activeUsers[id]);
  this.activeUsers.splice(id,1);
}

onSetToActive(id:number)
{
  this.activeUsers.push(this.inactiveUsers[id]);
  this.inactiveUsers.splice(id,1);
}
 
}
