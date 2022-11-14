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
  

  beforeEach((async() => {

    await TestBed.configureTestingModule({

      declarations: [
        TestComponent, ChangeColorDirective
      ],
     

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
    
    const element = el.query(By.directive(ChangeColorDirective));

    expect(element).toBeTruthy();
    expect(element.nativeElement.style.backgroundColor).toEqual('yellow');
  })

  
});
