import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1742848571156 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "user" (
              "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
              "email" varchar(255) UNIQUE NOT NULL,
              "firstName" varchar(100) NOT NULL,
              "lastName" varchar(100) NOT NULL,
              "age" integer DEFAULT 18,
              "createdAt" timestamptz NOT NULL DEFAULT now(),
              "updatedAt" timestamptz NOT NULL DEFAULT now(),
              "version" integer NOT NULL DEFAULT 1
            );
          `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
