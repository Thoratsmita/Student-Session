import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildToLoadComponent } from './child-to-load.component';

describe('ChildToLoadComponent', () => {
  let component: ChildToLoadComponent;
  let fixture: ComponentFixture<ChildToLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildToLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildToLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
