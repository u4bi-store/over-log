/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SearchOverlogService } from './search-overlog.service';

describe('SearchOverlogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchOverlogService]
    });
  });

  it('should ...', inject([SearchOverlogService], (service: SearchOverlogService) => {
    expect(service).toBeTruthy();
  }));
});
