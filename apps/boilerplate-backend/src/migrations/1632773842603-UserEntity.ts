import { MigrationInterface, QueryRunner } from 'typeorm'

export class UserEntity1632773842603 implements MigrationInterface {
  name = 'UserEntity1632773842603'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "user_roles_enum" AS ENUM('0', '1', '2')`,
    )
    await queryRunner.query(
      `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "internalComment" character varying(300), "isActive" boolean NOT NULL DEFAULT true, "firstName" character varying(255) NOT NULL, "lastName" character varying(255) NOT NULL, "email" character varying(255) NOT NULL, "roles" "user_roles_enum" array NOT NULL, "hashedPassword" character varying(255) NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`)
    await queryRunner.query(`DROP TYPE "user_roles_enum"`)
  }
}
