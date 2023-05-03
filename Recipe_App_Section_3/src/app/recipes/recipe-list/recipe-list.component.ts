import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes:Recipe[] = [
    new Recipe('Mac and Cheese','Heaven', 'https://www.southernliving.com/thmb/dggA-1xhnrGu8UcQfNUqF7riKV8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/southern-living-Baked-Mac-and-Cheese-3x4-1126_preview-51081c4cf24e4f438f1ca5bb8eb4160c.jpg')
  ]

}
