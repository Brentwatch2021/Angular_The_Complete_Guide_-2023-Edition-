import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  @Output() onRecipeItemSelected = new EventEmitter<Recipe>();

  @Input() recipe:Recipe;

  onrecipeSelected()
  {
    this.onRecipeItemSelected.emit(this.recipe);
  }
}
