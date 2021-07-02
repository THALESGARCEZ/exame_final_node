import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateManutencao1625273204785 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'manutencoes',
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: 'id_da_filial',
                        type: 'uuid'
                    },
                    {
                        name: 'nome_do_centro_de_custo',
                        type: 'varchar'
                    },
                    {
                        name: 'nome_do_produto',
                        type: 'varchar'
                    },
                    {
                        name: 'id_do_fornecedor',
                        type: 'uuid'
                    },
                    {
                        name: 'servico_executado',
                        type: 'varchar'
                    },
                    {
                        name: 'data_do_servico',
                        type: 'Date'
                    },
                    {
                        name: 'observacao',
                        type: 'varchar'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'FKFilial',
                        referencedTableName: 'filiais',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_da_filial'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    },
                    {
                        name: 'FKFornecedor',
                        referencedTableName: 'fornecedores',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_do_fornecedor'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('manutencoes')
    }

}
