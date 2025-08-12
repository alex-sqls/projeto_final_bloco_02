import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Categoria } from "../entities/categoria.entity";
import { DeleteResult, Like, Repository } from "typeorm";

@Injectable()
export class CategoriaService {
    constructor(
        @InjectRepository(Categoria)
        private categoriaRepository: Repository<Categoria>
    ) { }

    //buscar tudo
    async findAll(): Promise<Categoria[]> {
        return await this.categoriaRepository.find()
    }

    //busca por id
    async findById(id: number): Promise<Categoria> {

        const categoria = await this.categoriaRepository.findOne({
            where: {
                id
            },
        })

        if (!categoria) throw new HttpException('postagem nao encontrada', HttpStatus.NOT_FOUND)

        return categoria;
    }

    async findAllByCategoria(categoria: string): Promise<Categoria[]> {
        return await this.categoriaRepository.find({
            where: {
                tipoCategoria: Like(`%${categoria}%`)
            },
        })
    }

    async create(categoria: Categoria): Promise<Categoria> {
        return await this.categoriaRepository.save(categoria)
    }

    async update(categoria: Categoria): Promise<Categoria> {

        const categoria_id = await this.findById(categoria.id);
        if (!categoria_id) {
            throw new HttpException("Postagem não encontrada", HttpStatus.NOT_FOUND);
        }

        return await this.categoriaRepository.save(categoria);
    }

    async delete (id: number): Promise< DeleteResult > {
        await this.findById(id)
        return await this.categoriaRepository.delete(id)
}

}