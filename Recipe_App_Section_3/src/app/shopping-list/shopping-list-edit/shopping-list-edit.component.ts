import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {

  @ViewChild('nameInputElement',{static:false}) nameOfIngredientElementRef:ElementRef;
  @ViewChild('amountInputElement',{static:false}) amountOfIngredientElementRef:ElementRef;

  @Output() onIngredientAdded = new EventEmitter<Ingredient>();

  onShoppingListItemAdded(nameInputElement:HTMLInputElement,amountInputElement:HTMLInputElement)
  {
    if(nameInputElement.value && amountInputElement.value)
    {
      const nameOfIngredient = this.nameOfIngredientElementRef.nativeElement.value;
      const amountOfIngredient = this.amountOfIngredientElementRef.nativeElement.value;
      this.onIngredientAdded.emit(new Ingredient(nameOfIngredient,amountOfIngredient))
    }
  }

}
