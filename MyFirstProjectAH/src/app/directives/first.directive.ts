import { element } from 'protractor';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFirst]' //"appFirst"
})
export class FirstDirective {

  constructor(private elementRef:ElementRef)
  {
    elementRef.nativeElement.style.color="red";

   }

}
