import { Body, Controller, Post } from '@nestjs/common';
import { UploadCarbonListingDto } from './dto/upload-carbon-listing.dto';
import { UploadCarbonService } from './upload-carbon.service';

@Controller('/carbon')
export class UploadCarbonController {
  constructor(private readonly uploadCarbonService: UploadCarbonService) {}
  @Post('upload-carbon')
  uploadCarbon(@Body() uploadCarbonListingDto: UploadCarbonListingDto) {
    return this.uploadCarbonService.uploadCarbon(uploadCarbonListingDto);
  }
}
