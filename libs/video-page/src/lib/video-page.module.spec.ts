import { async, TestBed } from '@angular/core/testing';
import { VideoPageModule } from './video-page.module';

describe('VideoPageModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VideoPageModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(VideoPageModule).toBeDefined();
  });
});
