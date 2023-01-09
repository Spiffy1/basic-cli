import { BadRequestException, Injectable, InternalServerErrorException, StreamableFile } from '@nestjs/common'
import { Response } from 'express'
import { Browser, chromium, Page } from 'playwright'
import * as Sentry from '@sentry/node'
import { RewriteFrames } from '@sentry/integrations'
import { PDF_ERROR_MESSAGE as errMsg } from '../core'

@Injectable()
export class ConverterService {
  async getPdfContent(website: string, res: Response): Promise<Response<any, Record<string, any>>> {
    let browser: Browser
    let page: Page

    Sentry.init({
      dsn: process.env.SENTRY_DSN,
      tracesSampleRate: 1.0,
      integrations: [
        new RewriteFrames({
          root: global.__dirname,
        }),
      ],
    })

    Sentry.captureException('testg3h948gh30894hg0394g')

    try {
      browser = await chromium.launch()
      page = await browser.newPage()
    } catch (err) {
      throw new InternalServerErrorException('Can not load chromium browser', err)
    }

    try {
      await page.goto(website, {
        waitUntil: 'networkidle',
      })
    } catch (err) {
      Sentry.captureException('testg3h948gh30894hg0394g')
      throw new BadRequestException(errMsg.CANT_GET_HTML_CONTENT)
    }
    let pdfBuffer: Buffer
    try {
      pdfBuffer = await page.pdf()
    } catch (err) {
      throw new InternalServerErrorException(errMsg.CANNOT_CONVERT_PDF)
    } finally {
      await browser.close()
    }

    if (!pdfBuffer) {
      throw new BadRequestException(errMsg.EMPTY_PDF_BUFFER)
    }
    return new StreamableFile(pdfBuffer).getStream().pipe(res)
  }
}
