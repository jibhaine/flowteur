import { async, TestBed } from '@angular/core/testing';
import { MediasPageModule } from './medias-page.module';

describe('MediasPageModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MediasPageModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MediasPageModule).toBeDefined();
  });
});
