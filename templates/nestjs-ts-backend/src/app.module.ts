import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConverterModule } from './converter/converter.module'
import { CoreModule } from './core'

@Module({
  imports: [ConverterModule, CoreModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
