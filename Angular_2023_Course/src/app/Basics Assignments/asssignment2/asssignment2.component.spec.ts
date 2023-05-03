import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asssignment2Component } from './asssignment2.component';

describe('Asssignment2Component', () => {
  let component: Asssignment2Component;
  let fixture: ComponentFixture<Asssignment2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Asssignment2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Asssignment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
