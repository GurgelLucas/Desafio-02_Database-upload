import {MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class AaddForeignKeyCategoryId1608658789337 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createForeignKey(
        'transactions',
        new TableForeignKey ({
          name: 'TransactionCategory',
          columnNames: ['category_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'categories',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE'
      }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('transactions', 'TransactionCategory');
    }

}
