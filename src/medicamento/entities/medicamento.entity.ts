import { IsNotEmpty } from "class-validator";
import { Transform } from "node:stream";

import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";


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

    @ManyToOne(() => Categoria, (categoria) => categoria.medicamento, {
    onDelete: 'CASCADE',
  })
    @JoinColumn({ name: 'categoria_id' })
    categoria: Categoria;
}