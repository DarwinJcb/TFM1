// src/prisma.config.usuarios.ts:
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
    schema: "prisma_bdtfm1/usuarios-perfil.prisma",
    migrations: {
        path: "prisma_bdtfm1/migrations",
    },
    datasource: {
        url: process.env["DATABASE_URL_USUARIOS_PERFIL"],
    },
});