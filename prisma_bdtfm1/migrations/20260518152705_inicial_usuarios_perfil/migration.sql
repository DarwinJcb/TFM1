-- CreateEnum
CREATE TYPE "Genero" AS ENUM ('MASCULINO', 'FEMENINO');

-- CreateTable
CREATE TABLE "Usuario" (
    "idUsuario" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "biografia" TEXT,
    "peso" DOUBLE PRECISION,
    "altura" DOUBLE PRECISION,
    "nacionalidad" TEXT,
    "genero" "Genero" NOT NULL,
    "ciudad" TEXT,
    "pais" TEXT,
    "numero" TEXT,
    "correo" TEXT NOT NULL,
    "signoZodiacal" TEXT,
    "queBusca" TEXT,
    "ubicacion" TEXT,
    "hobbie" TEXT,
    "profesion" TEXT,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaActualizacion" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("idUsuario")
);

-- CreateTable
CREATE TABLE "FotoUsuario" (
    "idFoto" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "urlFoto" TEXT NOT NULL,
    "descripcion" TEXT,

    CONSTRAINT "FotoUsuario_pkey" PRIMARY KEY ("idFoto")
);

-- CreateTable
CREATE TABLE "Musica" (
    "idMusica" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "artista" TEXT,
    "album" TEXT,
    "enlaceSpotify" TEXT,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Musica_pkey" PRIMARY KEY ("idMusica")
);

-- CreateTable
CREATE TABLE "MusicaUsuario" (
    "idMusicaUsuario" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "idMusica" INTEGER NOT NULL,

    CONSTRAINT "MusicaUsuario_pkey" PRIMARY KEY ("idMusicaUsuario")
);

-- CreateTable
CREATE TABLE "EstadoActividad" (
    "idEstadoActividad" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "estaActivo" BOOLEAN NOT NULL DEFAULT false,
    "enLive" BOOLEAN NOT NULL DEFAULT false,
    "ultimaConexion" TIMESTAMP(3),

    CONSTRAINT "EstadoActividad_pkey" PRIMARY KEY ("idEstadoActividad")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_correo_key" ON "Usuario"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "MusicaUsuario_idUsuario_idMusica_key" ON "MusicaUsuario"("idUsuario", "idMusica");

-- CreateIndex
CREATE UNIQUE INDEX "EstadoActividad_idUsuario_key" ON "EstadoActividad"("idUsuario");

-- AddForeignKey
ALTER TABLE "FotoUsuario" ADD CONSTRAINT "FotoUsuario_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("idUsuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MusicaUsuario" ADD CONSTRAINT "MusicaUsuario_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("idUsuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MusicaUsuario" ADD CONSTRAINT "MusicaUsuario_idMusica_fkey" FOREIGN KEY ("idMusica") REFERENCES "Musica"("idMusica") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EstadoActividad" ADD CONSTRAINT "EstadoActividad_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("idUsuario") ON DELETE CASCADE ON UPDATE CASCADE;
