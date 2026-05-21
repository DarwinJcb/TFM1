// src/prisma/prisma-usuarios.service.ts:
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../generated/prisma/usuarios-perfil/client';

@Injectable()
export class PrismaUsuariosService extends PrismaClient implements OnModuleInit {
    constructor() {
        const adapter = new PrismaPg({
            connectionString: process.env.DATABASE_URL_USUARIOS_PERFIL,
        });

        super({ adapter });
    }

    async onModuleInit() {
        await this.$connect();
    }
}