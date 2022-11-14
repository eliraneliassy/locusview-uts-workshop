import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[changeColor]'
})
export class ChangeColorDirective implements AfterViewInit {

  @Input() changeColor?: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {

  }
  ngAfterViewInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement,
      'background-color',
      this.changeColor)
  }

}
