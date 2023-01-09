import { IsNotEmpty, IsString, IsUrl } from 'class-validator'

export class ConvertWebsiteDto {
  @IsNotEmpty()
  @IsString()
  @IsUrl({ always: false })
  websiteUrl: string
}
