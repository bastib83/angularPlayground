import { TestBed } from '@angular/core/testing';

import { OrderPublicService } from './order-public.service';

describe('OrderPublicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderPublicService = TestBed.get(OrderPublicService);
    expect(service).toBeTruthy();
  });
});
