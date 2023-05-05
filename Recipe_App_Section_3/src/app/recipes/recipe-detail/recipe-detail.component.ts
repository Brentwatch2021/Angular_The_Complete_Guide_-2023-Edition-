import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { shoppingListService } from '../../shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/shared/Ingredient.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeSelectedFromList:Recipe;

  constructor(private shoppingListService:shoppingListService,private router:Router,private route:ActivatedRoute,private recipeService:RecipeService) {}



  ngOnInit(): void {

    this.route.params.subscribe(
      (params:Params) => {
        // this.recipeSelectedFromList = this.recipeService.getRecipeByName(params['name']);
        this.recipeSelectedFromList = this.recipeService.getRecipeById(+params['id']);
      }
    );

  }

  toEditMode()
  {
    const id = this.route.snapshot.params['id'];
    this.router.navigate(['edit'],{relativeTo:this.route});
  }

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
