import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseIntercept, AbnormalFilter } from './common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 啟用跨域
  app.enableCors();
  // 定義全局攔截器用來處理返回結果
  app.useGlobalInterceptors(new ResponseIntercept());
  // 定義全局過濾器用來處理異常情況
  app.useGlobalFilters(new AbnormalFilter());
  await app.listen(3000);
}
bootstrap();
