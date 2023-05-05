import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked, AfterViewInit,AfterViewChecked {
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }
  
  ngOnInit(): void {
    console.log('init')
  }

  ngOnChanges():void
  {
    console.log('changes')
  }

  ngDoCheck():void
  {
    console.log('docheck')
  }

  constructor(private recipeService:RecipeService) {}

  // recipes:Recipe[] = [
  //   new Recipe('Mac and Cheese','Heaven', 'https://www.southernliving.com/thmb/dggA-1xhnrGu8UcQfNUqF7riKV8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/southern-living-Baked-Mac-and-Cheese-3x4-1126_preview-51081c4cf24e4f438f1ca5bb8eb4160c.jpg')
  // ]

  recipes:Recipe[] = this.recipeService.getRecipes();  

  //@Output() onRecipeIteminListSelected = new EventEmitter<Recipe>();

  onrecipeItemSelected(recipe:Recipe)
  {
    //this.onRecipeIteminListSelected.emit(recipe);
  }

}
