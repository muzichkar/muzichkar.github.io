import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWork04Component } from './home-work04.component';

describe('HomeWork04Component', () => {
  let component: HomeWork04Component;
  let fixture: ComponentFixture<HomeWork04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWork04Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWork04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
