import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { shoppingListService } from '../../shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/shared/Ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input() recipeSelectedFromList:Recipe;

  constructor(private shoppingListService:shoppingListService) {}


  toShoppingList()
  {
    console.log(this.recipeSelectedFromList.ingredients);
    // emit event through shopping service with ingredients
    // this.recipeSelectedFromList.ingredients.forEach((ingredient:Ingredient) => {
    //   this.shoppingListService.addIngredientAdded(ingredient);
    // });

    this.shoppingListService.addIngredientsToShoppingList(this.recipeSelectedFromList.ingredients);
    
  }

}
