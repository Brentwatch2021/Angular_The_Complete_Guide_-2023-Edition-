import { Component } from '@angular/core';

@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.css']
})
export class MainGameComponent {
  EmittedCounterFromGame(counter:number)
  {
    if(counter % 2 === 0)
    {
      // even
    }
    else
    {
      // odd
    }
    
  }
}
