import { Directive, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('class.highlight') highlighted: boolean;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlighted = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlighted = false;
  }

  constructor(private el: ElementRef) {}

}
