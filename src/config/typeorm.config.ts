// 在配置
import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { join } from 'path';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'mysql',
  host: configService.get('MYSQL_HOST'),
  port: configService.get('MYSQL_PORT'),
  username: configService.get('MYSQL_USER'),
  password: configService.get('MYSQL_PASSWORD'),
  database: configService.get('MYSQL_DATABASE'),
  // 更新實體路徑以匹配 NestJS 的模組結構
  // entities: ['src/**/entities/*.entity.ts', 'dist/**/entities/*.entity.js'],
  entities: [join(__dirname, '../**/entities/*.entity{.ts,.js}')],
  // migrations 路徑
  migrations: [join(__dirname, '../migrations/*{.ts,.js}')],
  // 如果需要支援 JavaScript 版本的 migrations
  // migrations: ['dist/migrations/*.js', 'src/migrations/*.ts'],
  synchronize: false,
});
