import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isDisplayRecipes:boolean = true;

  title = 'Recipe_App_Section_3';

  onNavigationEmitted(isDisplayRecipes:boolean)
  {
    this.isDisplayRecipes = isDisplayRecipes;
  }
}
