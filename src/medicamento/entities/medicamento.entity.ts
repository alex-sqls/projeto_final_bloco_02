import { IsNotEmpty } from "class-validator";
import { Transform } from "node:stream";

import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({ name: "tb_medicamento" })
export class Medicamento {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({
        length: 100, nullable: false,
    })
    nome: string;

    @IsNotEmpty()
    @Column({
        length: 100, nullable: false,
    })
    fabricante: string;

    @IsNotEmpty()
    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    preco: number;

    @UpdateDateColumn({ type: 'timestamp' })
    dataValidade: Date;

}