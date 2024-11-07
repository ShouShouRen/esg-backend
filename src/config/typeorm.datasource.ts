import { DataSource } from 'typeorm';
import { City } from '../city/entities/city.entity';
import * as dotenv from 'dotenv';
import { join } from 'path';

dotenv.config();

const dataSource = new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT || '3306'),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [City],
  migrations: [join(__dirname, '..', 'migrations', '*.{ts,js}')],
  synchronize: false,
  logging: true,
});

export default dataSource;
