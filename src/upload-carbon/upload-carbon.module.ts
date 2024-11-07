import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarbonListing } from './entities/upload-carbon.entity';
import { UploadCarbonController } from './upload-carbon.controller';
import { UploadCarbonService } from './upload-carbon.service';

@Module({
  imports: [TypeOrmModule.forFeature([CarbonListing])],
  controllers: [UploadCarbonController],
  providers: [UploadCarbonService],
})
export class UploadCarbonModule {}
