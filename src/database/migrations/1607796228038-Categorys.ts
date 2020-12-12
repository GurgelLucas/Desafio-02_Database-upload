import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Categorys1607796228038 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(
        new Table({
          name: 'categorys',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name: 'title',
              type: 'string',
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()',
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropTable('categorys');
    }

}
