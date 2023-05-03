import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component {
  
  isContentDisplayed:boolean = false;

  loggedClicks:string[] = [];

  handleParagraghDisplay()
  {
    this.LogClick()
    this.isContentDisplayed = !this.isContentDisplayed;
  }


  LogClick() {
    const timeStamp = Math.floor(new Date().getTime() / 1000).toString();
    this.loggedClicks.push(timeStamp);
  }

  getColor(index:number)
  {
    if(index >= 5)
    {
      return '#0000FF';
    }
    return '';
  }


}
