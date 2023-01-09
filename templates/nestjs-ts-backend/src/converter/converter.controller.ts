import { Body, Controller, Header, Post, Res } from '@nestjs/common'
import { Response } from 'express'
import { ConverterService } from './converter.service'
import { ConvertWebsiteDto } from './dto/convert-pdf.dto'

@Controller('converters')
export class ConverterController {
  constructor(private readonly converterService: ConverterService) {}

  @Post('pdf')
  @Header('website', 'none')
  async generatePDF(@Res() res: Response, @Body() website: ConvertWebsiteDto): Promise<Response> {
    return this.converterService.getPdfContent(website.websiteUrl, res)
  }
}
