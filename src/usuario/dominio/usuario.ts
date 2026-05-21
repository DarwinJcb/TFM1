// src/usuario/dominio/usuario.ts:
import { Genero } from './genero.enum';

export interface Usuario {
    idUsuario: number;
    nombre: string;
    edad: number;
    biografia?: string | null;
    peso?: number | null;
    altura?: number | null;
    nacionalidad?: string | null;
    genero: Genero;
    ciudad?: string | null;
    pais?: string | null;
    numero?: string | null;
    correo: string;
    contrasena?: string | null;
    signoZodiacal?: string | null;
    queBusca?: string | null;
    ubicacion?: string | null;
    hobbie?: string | null;
    profesion?: string | null;
    fechaCreacion: Date;
    fechaActualizacion: Date;
}

export interface CrearUsuario {
    nombre: string;
    edad: number;
    biografia?: string;
    peso?: number;
    altura?: number;
    nacionalidad?: string;
    genero: Genero;
    ciudad?: string;
    pais?: string;
    numero?: string;
    correo: string;
    contrasena?: string;
    signoZodiacal?: string;
    queBusca?: string;
    ubicacion?: string;
    hobbie?: string;
    profesion?: string;
}

export type ActualizarUsuario = Partial<CrearUsuario>;