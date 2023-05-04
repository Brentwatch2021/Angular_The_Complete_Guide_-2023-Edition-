import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section9mainComponent } from './section9main.component';

describe('Section9mainComponent', () => {
  let component: Section9mainComponent;
  let fixture: ComponentFixture<Section9mainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section9mainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section9mainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
