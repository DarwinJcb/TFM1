// src/prisma.config.pagos.ts:
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
    schema: "prisma_bdtfm3/suscripciones-pagos.prisma",
    migrations: {
        path: "prisma_bdtfm3/migrations",
    },
    datasource: {
        url: process.env["DATABASE_URL_SUSCRIPCIONES_PAGOS"],
    },
});