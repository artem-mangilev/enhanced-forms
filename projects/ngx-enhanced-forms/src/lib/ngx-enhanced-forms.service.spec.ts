import { TestBed } from '@angular/core/testing';

import { NgxEnhancedFormsService } from './ngx-enhanced-forms.service';

describe('NgxEnhancedFormsService', () => {
  let service: NgxEnhancedFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxEnhancedFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
