// src/prisma.config.citas.ts:
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
    schema: "prisma_bdtfm2/citas-comunicacion.prisma",
    migrations: {
        path: "prisma_bdtfm2/migrations",
    },
    datasource: {
        url: process.env["DATABASE_URL_CITAS_COMUNICACION"],
    },
});