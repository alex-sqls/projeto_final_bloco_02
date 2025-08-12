import { IsIn, IsNotEmpty } from "class-validator";

import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity({name: "tb_categoria"})
export class Categoria{

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({
        type: 'enum',
        enum: [
            'medicamento de referencia',
            'medicamento generico',
            'medicamento similares',
        ],
        nullable: false,
    })
    tipoCategoria: string;

    
}