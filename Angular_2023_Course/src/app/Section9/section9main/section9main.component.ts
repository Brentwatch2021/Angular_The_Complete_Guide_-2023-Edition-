import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { CounterServiceService } from '../counter-service.service';

@Component({
  selector: 'app-section9main',
  templateUrl: './section9main.component.html',
  styleUrls: ['./section9main.component.css'],
  providers:[UsersService]
})
export class Section9mainComponent  {


constructor(public userService:UsersService , public counterService:CounterServiceService) {}
  


}