// src/prisma.config.pagos.ts:
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
    schema: "prisma/suscripciones-pagos/schema.prisma",
    migrations: {
        path: "prisma/suscripciones-pagos/migrations",
    },
    datasource: {
        url: process.env["DATABASE_URL_SUSCRIPCIONES_PAGOS"],
    },
});