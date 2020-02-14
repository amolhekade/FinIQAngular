import { Directive, ElementRef  } from '@angular/core';


@Directive({
  selector: '[appSecond]'
})
export class SecondDirective {

  constructor(private elementRef :  ElementRef )
   {
    elementRef.nativeElement.style.color="gray";
    elementRef.nativeElement.style.fontWeight="bold";
    elementRef.nativeElement.style.fontFamily="Calibari";
    elementRef.nativeElement.style.fontFamily= "Arial, Helvetica, sans-serif";
  }

}
