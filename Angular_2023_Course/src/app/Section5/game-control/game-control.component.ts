import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  
  @Output('incrementingNumber') incrementingNumberEvent = new EventEmitter<number>(); 

  public timer?:any;
  public counter:number = 0;

  onGameStart()
  {
    this.timer = setInterval(() => {
      this.counter++;
      //console.log("Now on " + this.counter);
      this.incrementingNumberEvent.emit(this.counter);
    },1000)  
  }

  onGameStop()
  {
    clearInterval(this.timer);
  }
}
