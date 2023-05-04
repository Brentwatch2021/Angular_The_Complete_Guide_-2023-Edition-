import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../users.service';
import { CounterServiceService } from '../counter-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users:string[] = ['max', 'toast']

  constructor(private userService:UsersService,private counterService:CounterServiceService){}

  onSetToActive(id:number)
  {
    this.counterService.countSwitch();
    this.userService.onSetToActive(id);
  }
}
