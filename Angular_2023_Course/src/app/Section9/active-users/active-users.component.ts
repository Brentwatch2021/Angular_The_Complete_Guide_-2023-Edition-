import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../users.service';
import { CounterServiceService } from '../counter-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users:string[] = [];
  
  
  constructor(private userService:UsersService,private counterService: CounterServiceService) {}

  onSetToInActive(id:number)
  {
    this.counterService.countSwitch();
    this.userService.onSetToInactive(id);
  }
}
