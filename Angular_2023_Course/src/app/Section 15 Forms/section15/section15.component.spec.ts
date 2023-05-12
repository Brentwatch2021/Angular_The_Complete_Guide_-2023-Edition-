import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section15Component } from './section15.component';

describe('Section15Component', () => {
  let component: Section15Component;
  let fixture: ComponentFixture<Section15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section15Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
