import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/Ingredient.model";

export class shoppingListService
{
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients:Ingredient[] = [
        new Ingredient('flour',4)
      ];

    public getIngredients()
    {
        return this.ingredients.slice();
    }

    public addIngredientAdded(ingredient:Ingredient)
    {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients);
    }

    public addIngredientsToShoppingList(ingredients:Ingredient[])
    {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients);
    }
}