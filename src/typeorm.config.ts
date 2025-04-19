import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { User } from './users/entities/user.entity';

const { PG_HOST, PG_PORT, PG_USR, PG_PASS, PG_DB } = config({
  path: '.local/public.env',
}).parsed!;
console.log('PG_HOST', PG_HOST, PG_PORT, PG_USR, PG_PASS, PG_DB);
const entities = [User];

export const dataSource = new DataSource({
  type: 'postgres',
  host: PG_HOST,
  port: +PG_PORT,
  username: PG_USR,
  password: PG_PASS,
  database: PG_DB,
  logging: true,
  synchronize: true,
  migrationsRun: true,
  entities,
});
