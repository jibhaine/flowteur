import { async, TestBed } from '@angular/core/testing';
import { AnchorModule } from './anchor.module';

describe('AnchorModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AnchorModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AnchorModule).toBeDefined();
  });
});
