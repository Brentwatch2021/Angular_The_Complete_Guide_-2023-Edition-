import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { shoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  
  ingredients:Ingredient[];
  slSubscription:Subscription;

  constructor(private shoppingListService:shoppingListService){}
  
  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.slSubscription = this.shoppingListService.ingredientsChanged.subscribe
    ((ingredients:Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }


  onIngredientAddedFromEdit(ingredient:Ingredient)
  {
    this.shoppingListService.addIngredientAdded(ingredient);
  }


  ngOnDestroy(): void {
    this.slSubscription.unsubscribe();
  }


}
