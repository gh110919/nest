import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'service_postgres_username',
  password: 'service_postgres_password',
  database: 'service_postgres_database',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  logging: true,
  migrationsRun: false,
  migrationsTransactionMode: 'each',
  extra: {
    max: 10,
    connectionTimeoutMillis: 5000,
  },
  ssl: false,
});
