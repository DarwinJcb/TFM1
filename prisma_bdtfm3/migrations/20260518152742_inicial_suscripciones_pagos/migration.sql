-- CreateEnum
CREATE TYPE "TipoSuscripcion" AS ENUM ('BRONCE', 'GOLD', 'PREMIUM', 'PLATINO');

-- CreateEnum
CREATE TYPE "EstadoDonacion" AS ENUM ('PENDIENTE', 'COMPLETADA', 'RECHAZADA');

-- CreateTable
CREATE TABLE "PlanSuscripcion" (
    "idPlanSuscripcion" SERIAL NOT NULL,
    "tipo" "TipoSuscripcion" NOT NULL,
    "valor" DECIMAL(10,2) NOT NULL,
    "beneficios" TEXT,
    "restricciones" TEXT,
    "mensajesIlimitados" BOOLEAN NOT NULL DEFAULT false,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PlanSuscripcion_pkey" PRIMARY KEY ("idPlanSuscripcion")
);

-- CreateTable
CREATE TABLE "SuscripcionUsuario" (
    "idSuscripcionUsuario" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "idPlanSuscripcion" INTEGER NOT NULL,
    "fechaInicio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaFin" TIMESTAMP(3),
    "activa" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "SuscripcionUsuario_pkey" PRIMARY KEY ("idSuscripcionUsuario")
);

-- CreateTable
CREATE TABLE "Donacion" (
    "idDonacion" SERIAL NOT NULL,
    "idUsuarioEmisor" INTEGER NOT NULL,
    "idUsuarioReceptor" INTEGER NOT NULL,
    "monto" DECIMAL(10,2) NOT NULL,
    "mensaje" TEXT,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "estadoDonacion" "EstadoDonacion" NOT NULL DEFAULT 'PENDIENTE',

    CONSTRAINT "Donacion_pkey" PRIMARY KEY ("idDonacion")
);

-- CreateIndex
CREATE UNIQUE INDEX "PlanSuscripcion_tipo_key" ON "PlanSuscripcion"("tipo");

-- CreateIndex
CREATE UNIQUE INDEX "SuscripcionUsuario_idUsuario_key" ON "SuscripcionUsuario"("idUsuario");

-- AddForeignKey
ALTER TABLE "SuscripcionUsuario" ADD CONSTRAINT "SuscripcionUsuario_idPlanSuscripcion_fkey" FOREIGN KEY ("idPlanSuscripcion") REFERENCES "PlanSuscripcion"("idPlanSuscripcion") ON DELETE RESTRICT ON UPDATE CASCADE;
