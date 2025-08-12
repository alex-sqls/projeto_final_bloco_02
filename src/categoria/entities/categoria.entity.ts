import { IsEnum, IsIn, IsNotEmpty } from "class-validator";

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum TipoCategoria {
    REFERENCIA = 'referencia',
    GENERICO = 'generico',
    SIMILAR = 'similares',
}

@Entity({ name: "tb_categoria" })
export class Categoria {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'enum',
        enum: TipoCategoria,
        nullable: false
    })
    @IsNotEmpty()
    @IsEnum(TipoCategoria)
    tipoCategoria: TipoCategoria;

}