import { LoggerService } from './logger.service';
import { TestBed } from '@angular/core/testing';

import { BasicService } from './basic.service';

describe('BasicService', () => {
  let service: BasicService;
  let loggerService: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({

    });
    service = TestBed.inject(BasicService);
    loggerService = TestBed.inject(LoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return sum of a and b', () => {
    jest.spyOn(loggerService, 'log');

    const result = service.plus(1, 3);

    expect(result).toBe(4);
    expect(loggerService.log).toHaveBeenCalledTimes(1);
  });

});


  describe('BasicService', () => {
    let service: BasicService;
    let logger: LoggerService;

    beforeEach(() => {
      logger = new LoggerService();
      service = new BasicService(logger);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    })

    it('should return sum of a and b', () => {
      const result = service.plus(1, 3);

      expect(result).toBe(4);
    })
  })