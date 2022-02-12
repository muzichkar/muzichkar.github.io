import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lessons02Component } from './lessons02.component';

describe('Lessons02Component', () => {
  let component: Lessons02Component;
  let fixture: ComponentFixture<Lessons02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lessons02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lessons02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
