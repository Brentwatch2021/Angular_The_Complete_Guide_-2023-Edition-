import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const routes:Routes = [
  // pathMatch overides default prefix to fullpath match
  {path:'',redirectTo:'/recipes', pathMatch:'full'},
  {path:'recipes',component:RecipesComponent,children:[
    {path:'new',component:RecipeEditComponent},
    {path:'edit',component:RecipeEditComponent},
    {path:':id',component:RecipeDetailComponent},
    {path:':id/edit',component:RecipeEditComponent},
  ]},
  {path:'shoppingList',component:ShoppingListComponent}
]

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)],
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
