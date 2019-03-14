import { TestBed } from '@angular/core/testing';

import { TagCloudService } from './tag-cloud.service';

describe('TagCloudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TagCloudService = TestBed.get(TagCloudService);
    expect(service).toBeTruthy();
  });
});
