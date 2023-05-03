import { Component } from '@angular/core';

@Component({
  selector: 'app-asssignment2',
  templateUrl: './asssignment2.component.html',
  styleUrls: ['./asssignment2.component.css']
})
export class Asssignment2Component {
  username:string = "";

  resetusername()
  {
    this.username = "";
  }
}
