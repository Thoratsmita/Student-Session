import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChatPannelComponent } from './new-chat-pannel.component';

describe('NewChatPannelComponent', () => {
  let component: NewChatPannelComponent;
  let fixture: ComponentFixture<NewChatPannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewChatPannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewChatPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
