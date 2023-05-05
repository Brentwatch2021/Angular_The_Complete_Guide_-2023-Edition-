import { Ingredient } from "../shared/Ingredient.model";
import { Subject } from "rxjs";

export class shoppingListService
{
    ingredientsChanged = new Subject<Ingredient[]>();

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
        this.ingredientsChanged.next(this.ingredients);
    }

    public addIngredientsToShoppingList(ingredients:Ingredient[])
    {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients);
    }
}