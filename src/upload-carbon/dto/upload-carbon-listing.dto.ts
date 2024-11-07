import { IsNotEmpty, IsString, IsBoolean, IsDecimal } from 'class-validator';

export class UploadCarbonListingDto {
  @IsNotEmpty()
  @IsString()
  location: string;

  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsDecimal()
  price: number;

  @IsNotEmpty()
  @IsDecimal()
  carbonAmount: number;

  @IsNotEmpty()
  @IsBoolean()
  needStaff: boolean;

  @IsNotEmpty()
  @IsString()
  contact: string;
}
