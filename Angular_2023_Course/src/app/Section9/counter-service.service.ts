import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {

  public numberOfSwitching:number = 0;

  constructor() { }

  countSwitch()
  {
    this.numberOfSwitching++;
  }
}
