import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const swaggerConfig = new DocumentBuilder()
    .setTitle('microHtmlToPdf APIs Docs')
    .setDescription('All APIs using for microHtmlToPdf')
    .setVersion('1.0')
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup('api', app, document)
  await app.listen(process.env.PORT)
}
bootstrap()
