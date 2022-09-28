import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEnhancedFormsComponent } from './ngx-enhanced-forms.component';

describe('NgxEnhancedFormsComponent', () => {
  let component: NgxEnhancedFormsComponent;
  let fixture: ComponentFixture<NgxEnhancedFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxEnhancedFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxEnhancedFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
