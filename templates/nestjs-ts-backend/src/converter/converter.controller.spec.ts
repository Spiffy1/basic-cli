import { Test, TestingModule } from '@nestjs/testing'
import { ConverterController } from './converter.controller'
import { ConverterService } from './converter.service'

describe('ConverterController', () => {
  let converterController: ConverterController
  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [ConverterController],
      providers: [ConverterService],
    }).compile()
    converterController = moduleRef.get<ConverterController>(ConverterController)
  })

  it('should be defined', () => {
    expect(converterController).toBeDefined()
  })
})
