import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarbonListing } from './entities/upload-carbon.entity';
import { UploadCarbonListingDto } from './dto/upload-carbon-listing.dto';

@Injectable()
export class UploadCarbonService {
  constructor(
    @InjectRepository(CarbonListing)
    private uploadCarbonRepository: Repository<CarbonListing>,
  ) {}

  async uploadCarbon(uploadCarbonListingDto: UploadCarbonListingDto) {
    return this.uploadCarbonRepository.save(uploadCarbonListingDto);
  }
}
