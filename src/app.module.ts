import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config';
import { UploadCarbonModule } from './upload-carbon/upload-carbon.module';
import { CityModule } from './city/city.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UserModule,
    CityModule,
    UploadCarbonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
