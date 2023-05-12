import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateformsAComponent } from './templateforms-a.component';

describe('TemplateformsAComponent', () => {
  let component: TemplateformsAComponent;
  let fixture: ComponentFixture<TemplateformsAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateformsAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateformsAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
