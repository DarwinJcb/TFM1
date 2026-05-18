-- CreateEnum
CREATE TYPE "TipoInteraccion" AS ENUM ('LIKE', 'NOLIKE', 'SUPERLIKE');

-- CreateTable
CREATE TABLE "Interaccion" (
    "idInteraccion" SERIAL NOT NULL,
    "idUsuarioEmisor" INTEGER NOT NULL,
    "idUsuarioReceptor" INTEGER NOT NULL,
    "tipoInteraccion" "TipoInteraccion" NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Interaccion_pkey" PRIMARY KEY ("idInteraccion")
);

-- CreateTable
CREATE TABLE "Match" (
    "idMatch" SERIAL NOT NULL,
    "idUsuarioUno" INTEGER NOT NULL,
    "idUsuarioDos" INTEGER NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("idMatch")
);

-- CreateTable
CREATE TABLE "Chat" (
    "idChat" SERIAL NOT NULL,
    "idUsuarioUno" INTEGER NOT NULL,
    "idUsuarioDos" INTEGER NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("idChat")
);

-- CreateTable
CREATE TABLE "Mensaje" (
    "idMensaje" SERIAL NOT NULL,
    "idChat" INTEGER NOT NULL,
    "idRemitente" INTEGER NOT NULL,
    "contenido" TEXT NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "leido" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Mensaje_pkey" PRIMARY KEY ("idMensaje")
);

-- CreateTable
CREATE TABLE "ConfiguracionComunicacion" (
    "idConfiguracionComunicacion" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "permiteMensajes" BOOLEAN NOT NULL DEFAULT true,
    "requiereMatchParaChatear" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "ConfiguracionComunicacion_pkey" PRIMARY KEY ("idConfiguracionComunicacion")
);

-- CreateTable
CREATE TABLE "Bloqueo" (
    "idBloqueo" SERIAL NOT NULL,
    "idUsuarioBloqueador" INTEGER NOT NULL,
    "idUsuarioBloqueado" INTEGER NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Bloqueo_pkey" PRIMARY KEY ("idBloqueo")
);

-- CreateTable
CREATE TABLE "Reporte" (
    "idReporte" SERIAL NOT NULL,
    "idUsuarioReportador" INTEGER NOT NULL,
    "idUsuarioReportado" INTEGER NOT NULL,
    "descripcion" TEXT,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Reporte_pkey" PRIMARY KEY ("idReporte")
);

-- CreateTable
CREATE TABLE "RestriccionUsuario" (
    "idRestriccion" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "descripcion" TEXT NOT NULL,
    "activa" BOOLEAN NOT NULL DEFAULT true,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RestriccionUsuario_pkey" PRIMARY KEY ("idRestriccion")
);

-- CreateIndex
CREATE UNIQUE INDEX "Interaccion_idUsuarioEmisor_idUsuarioReceptor_key" ON "Interaccion"("idUsuarioEmisor", "idUsuarioReceptor");

-- CreateIndex
CREATE UNIQUE INDEX "Match_idUsuarioUno_idUsuarioDos_key" ON "Match"("idUsuarioUno", "idUsuarioDos");

-- CreateIndex
CREATE UNIQUE INDEX "Chat_idUsuarioUno_idUsuarioDos_key" ON "Chat"("idUsuarioUno", "idUsuarioDos");

-- CreateIndex
CREATE INDEX "Mensaje_idChat_idx" ON "Mensaje"("idChat");

-- CreateIndex
CREATE UNIQUE INDEX "ConfiguracionComunicacion_idUsuario_key" ON "ConfiguracionComunicacion"("idUsuario");

-- CreateIndex
CREATE UNIQUE INDEX "Bloqueo_idUsuarioBloqueador_idUsuarioBloqueado_key" ON "Bloqueo"("idUsuarioBloqueador", "idUsuarioBloqueado");

-- AddForeignKey
ALTER TABLE "Mensaje" ADD CONSTRAINT "Mensaje_idChat_fkey" FOREIGN KEY ("idChat") REFERENCES "Chat"("idChat") ON DELETE CASCADE ON UPDATE CASCADE;
