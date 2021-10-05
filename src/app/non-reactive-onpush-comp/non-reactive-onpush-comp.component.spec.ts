import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonReactiveOnpushCompComponent } from './non-reactive-onpush-comp.component';

describe('NonReactiveOnpushCompComponent', () => {
  let component: NonReactiveOnpushCompComponent;
  let fixture: ComponentFixture<NonReactiveOnpushCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonReactiveOnpushCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonReactiveOnpushCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
