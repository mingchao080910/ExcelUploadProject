import { Test, TestingModule } from '@nestjs/testing';
import { BandController } from './band.controller';
import { BandService } from './band.service';

describe('BandController', () => {
  let controller: BandController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BandController],
      providers: [BandService],
    }).compile();

    controller = module.get<BandController>(BandController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
