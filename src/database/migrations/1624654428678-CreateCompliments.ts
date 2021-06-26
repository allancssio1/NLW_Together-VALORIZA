import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateCompliments1624654428678 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "compliments",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "user_sender",
                        type: "uuid"
                    },
                    {
                        name: "user_receiver",
                        type: "uuid"
                    },
                    {
                        name: "tag_id",
                        type: "uuid"
                    },
                    {
                        name: "message",
                        type: "varchar"
                    },
                    {
                        name: 'created_at',
                        type: "timestamp",
                        default: "now()"
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKUserSenderCompliments",  //nome da cheve estrangeira
                        referencedTableName: "users", //nome da tabela que está referenciada
                        referencedColumnNames: ["id"], //nome da coluna que está sendo referenciada
                        columnNames: ["user_sender"], //qual coluna é a pertecente a chave estrangeira
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKUserReceiverCompliments",  //nome da cheve estrangeira
                        referencedTableName: "users", //nome da tabela que está referenciada
                        referencedColumnNames: ["id"], //nome da coluna que está sendo referenciada
                        columnNames: ["user_receiver"], //qual coluna é a pertecente a chave estrangeira
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKTagCompliments",  //nome da cheve estrangeira
                        referencedTableName: "tags", //nome da tabela que está referenciada
                        referencedColumnNames: ["id"], //nome da coluna que está sendo referenciada
                        columnNames: ["tag_id"], //qual coluna é a pertecente a chave estrangeira
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )

        // outro modo de gerar chaves estrangeiras no typeorm
        /** await queryRunner.createForeignKey(
        *     "compliments",
        *     new TableForeignKey({
        *         name: "FKUserSenderCompliments",  *nome da cheve estrangeira
        *         referencedTableName: "users", *nome da tabela que está referenciada
        *         referencedColumnNames: ["id"], *nome da coluna que está sendo referenciada
        *         columnNames: ["user_sender"], *qual coluna é a pertecente a chave estrangeira
        *         onDelete: "SET NULL",
        *         onUpdate: "SET NULL"
        *     })
        * )
        */
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("compliments")
    }

}
