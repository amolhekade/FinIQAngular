import { element } from "protractor";
import { Directive, ElementRef, Renderer, HostListener } from "@angular/core";

@Directive({
  selector: "[appHost]"
})
export class HostDirective {
  constructor(private element: ElementRef, private render: Renderer) {}

  @HostListener("mouseover") onMouseOver() {
    this.ChangeColor("red");
  }
  @HostListener("click") onMouseClick() {
    window.alert("You pressed mouse key");
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.ChangeColor("green");
  }

  ChangeColor(Color: string) {
    this.render.setElementStyle(this.element.nativeElement, "color", Color);
  }
}
