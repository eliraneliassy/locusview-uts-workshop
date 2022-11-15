import { Component, DebugElement, ElementRef, Renderer2 } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { elementAt } from 'rxjs';
import { ChangeColorDirective } from './change-color.directive';

@Component({
  template: `
  <div changeColor="yellow">color should be yellow</div>
  <div class="no-directive">no bg color</div>
  `
})
class TestComponent { }

describe('ChangeColorDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let el: DebugElement;
  let elementRefMock: ElementRef;
  let renderer2: Renderer2;



  beforeEach((async () => {

    renderer2 = {
      setStyle: jest.fn()
    } as any;

    elementRefMock = {
      nativeElement: {}
    } as any;

    await TestBed.configureTestingModule({

      declarations: [
        TestComponent, ChangeColorDirective
      ],
      providers: [
        { provide: Renderer2, useValue: renderer2 },
        { provide: ElementRef, useValue: elementRefMock },
      ]


    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.debugElement.componentInstance;
    el = fixture.debugElement;


    fixture.detectChanges();
  }));

  it('should create an instance', () => {
    const directive = new ChangeColorDirective(elementRefMock, renderer2);
    expect(directive).toBeTruthy();
  });

  it('should change color if directive exist', () => {

    const r = TestBed.inject(Renderer2);
    console.log(r);

    const element = el.query(By.directive(ChangeColorDirective));

    expect(element).toBeTruthy();
    expect(element.nativeElement.style.backgroundColor).toEqual('yellow');
  })

  it('should change color if directive exist2', () => {
    const directive = new ChangeColorDirective(elementRefMock, renderer2);
    const rendererSpy = jest.spyOn(renderer2, 'setStyle');

    directive.ngAfterViewInit();

    expect(rendererSpy).toHaveBeenCalled();



  })


});
