import { Module } from '@nestjs/common'
import { CoreModule } from 'src/core/core.module'
import { ConverterService } from './converter.service'
import { ConverterController } from './converter.controller'

@Module({
  imports: [CoreModule],
  controllers: [ConverterController],
  providers: [ConverterService],
})
export class ConverterModule {}
