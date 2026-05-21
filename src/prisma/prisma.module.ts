// src/prisma/prisma.module.ts:
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaUsuariosService } from './prisma-usuarios.service';

@Global()
@Module({
  providers: [PrismaService, PrismaUsuariosService],
  exports: [PrismaService, PrismaUsuariosService],
})
export class PrismaModule { }
