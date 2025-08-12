import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Medicamento } from "../entities/medicamento.entity";
import { DeleteResult, Like, Repository } from "typeorm";

@Injectable()
export class MedicamentoService {
    constructor(
        @InjectRepository(Medicamento)
        private medicamentoRepository: Repository<Medicamento>
    ) { }

    //buscar tudo
    async findAll(): Promise<Medicamento[]> {
        return await this.medicamentoRepository.find({
            relations: {
                categoria: true
            }
        })
    }

    //busca por id
    async findById(id: number): Promise<Medicamento> {

        const medicamento = await this.medicamentoRepository.findOne({
            where: {
                id
            },
            relations: {
                categoria: true
            }
        })

        if (!medicamento) throw new HttpException('postagem nao encontrada', HttpStatus.NOT_FOUND)

        return medicamento;
    }

    async findAllByNome(nome: string): Promise<Medicamento[]> {
        return await this.medicamentoRepository.find({
            where: {
                nome: Like(`%${nome}%`)
            }, 
            relations: {
                categoria: true
            }
        })
    }

    async create(medicamento: Medicamento): Promise<Medicamento> {
        return await this.medicamentoRepository.save(medicamento)
    }

    async update(medicamento: Medicamento): Promise<Medicamento> {

        const categoria_id = await this.findById(medicamento.id);
        if (!categoria_id) {
            throw new HttpException("Postagem não encontrada", HttpStatus.NOT_FOUND);
        }

        return await this.medicamentoRepository.save(medicamento);
    }

    async delete (id: number): Promise< DeleteResult > {
        await this.findById(id)
        return await this.medicamentoRepository.delete(id)
}

}