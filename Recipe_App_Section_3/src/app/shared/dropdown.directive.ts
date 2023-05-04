import { Directive, ElementRef, HostBinding, HostListener, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {


  @HostBinding('class.open') isOpen:boolean = false;


  // @HostListener('click') onClick(eventData:Event)
  @HostListener('document:click', ['$event']) toggleOpen(eventData:Event)
  { 
    
    this.isOpen = this.elementRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    //this.renderer.setStyle(this.elementRef,'class','btn-danger');
    
  }



  // challenge allow this directive to attach and detach a css class to this element
  constructor(private renderer:Renderer2,private elementRef:ElementRef) { }


}
