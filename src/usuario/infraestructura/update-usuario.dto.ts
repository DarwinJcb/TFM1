// src/usuario/infraestructura/update-usuario.dto.ts:
import { Genero } from '../dominio/genero.enum';

export class UpdateUsuarioDto {
    nombre?: string;
    edad?: number;
    biografia?: string;
    peso?: number;
    altura?: number;
    nacionalidad?: string;
    genero?: Genero;
    ciudad?: string;
    pais?: string;
    numero?: string;
    correo?: string;
    contrasena?: string;
    signoZodiacal?: string;
    queBusca?: string;
    ubicacion?: string;
    hobbie?: string;
    profesion?: string;
}