import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';

import { MedicamentoController } from "./controllers/medicamento.controller";
import { MedicamentoService } from "./services/categoria.service";
import { Medicamento } from "./entities/medicamento.entity";


@Module({
  imports: [TypeOrmModule.forFeature([Medicamento])],
  controllers: [MedicamentoController],
  providers: [MedicamentoService], 
  exports:[TypeOrmModule] 
})
export class MedicamentoModule {}