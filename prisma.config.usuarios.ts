// src/prisma.config.usuarios.ts:
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
    schema: "prisma/usuarios-perfil/schema.prisma",
    migrations: {
        path: "prisma/usuarios-perfil/migrations",
    },
    datasource: {
        url: process.env["DATABASE_URL_USUARIOS_PERFIL"],
    },
});