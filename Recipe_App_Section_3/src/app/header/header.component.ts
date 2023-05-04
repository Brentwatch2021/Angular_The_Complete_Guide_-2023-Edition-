import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed:boolean = true;

  @Output() headerNavigationEmitter = new EventEmitter<boolean>();

  onRecipesClick()
  {
    this.headerNavigationEmitter.emit(true);
  }

  onShoppingListClick()
  {
    this.headerNavigationEmitter.emit(false);
  }
}
