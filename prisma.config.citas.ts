// src/prisma.config.citas.ts:
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
    schema: "prisma/citas-comunicacion/schema.prisma",
    migrations: {
        path: "prisma/citas-comunicacion/migrations",
    },
    datasource: {
        url: process.env["DATABASE_URL_CITAS_COMUNICACION"],
    },
});