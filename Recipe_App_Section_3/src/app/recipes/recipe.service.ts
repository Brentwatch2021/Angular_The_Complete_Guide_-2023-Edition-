import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/Ingredient.model";
import { Subject } from "rxjs";

export class RecipeService
{

   private recipes:Recipe[] = [
        new Recipe(1,'Mac and Cheese','Heaven', 'https://www.southernliving.com/thmb/dggA-1xhnrGu8UcQfNUqF7riKV8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/southern-living-Baked-Mac-and-Cheese-3x4-1126_preview-51081c4cf24e4f438f1ca5bb8eb4160c.jpg',
        [new Ingredient('macaroni',500),
        new Ingredient('cheese',420),
      ]),
      new Recipe(2,'Mac and Cheese','Heaven', 'https://www.southernliving.com/thmb/dggA-1xhnrGu8UcQfNUqF7riKV8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/southern-living-Baked-Mac-and-Cheese-3x4-1126_preview-51081c4cf24e4f438f1ca5bb8eb4160c.jpg',
        [new Ingredient('macaroni',500),
        new Ingredient('cheese',420),
      ])
      ]


    getRecipes()
    {
        return this.recipes.slice();
    }

    getRecipeByName(name:string)
    {
      return this.recipes.find(recipe => recipe.name === name);
    }

    getRecipeById(id:number)
    {
      return this.recipes.find(recipe => recipe.id === id);
    }
}