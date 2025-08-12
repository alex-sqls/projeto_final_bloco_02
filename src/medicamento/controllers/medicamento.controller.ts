import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { MedicamentoService } from "../services/categoria.service";
import { Medicamento } from "../entities/medicamento.entity";

@Controller("/medicamento")
export class MedicamentoController {
    constructor(private readonly medicamentoService: MedicamentoService) { }


    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Medicamento[]> {
        return this.medicamentoService.findAll()
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Medicamento> {
        return this.medicamentoService.findById(id)
    }

    @Get('/categoria/:nome')
    @HttpCode(HttpStatus.OK)
    findAllBycategoria(@Param('nome') nome: string): Promise<Medicamento[]> {
        return this.medicamentoService.findAllByNome(nome);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() medicamento: Medicamento): Promise<Medicamento> {
        return this.medicamentoService.create(medicamento);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() medicamento: Medicamento) : Promise<Medicamento> {
        return this.medicamentoService.update(medicamento);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.medicamentoService.delete(id)
    }

}