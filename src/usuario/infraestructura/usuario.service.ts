// src/usuario/infraestructura/usuario.service.ts:
import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaUsuariosService } from '../../prisma/prisma-usuarios.service';
import {
  ActualizarUsuario,
  CrearUsuario,
  Usuario,
} from '../dominio/usuario';
import { UsuarioRepository } from '../dominio/usuario.repository';

@Injectable()
export class UsuarioService extends UsuarioRepository {
  private readonly usuarioSelect = {
    idUsuario: true,
    nombre: true,
    edad: true,
    biografia: true,
    peso: true,
    altura: true,
    nacionalidad: true,
    genero: true,
    ciudad: true,
    pais: true,
    numero: true,
    correo: true,
    signoZodiacal: true,
    queBusca: true,
    ubicacion: true,
    hobbie: true,
    profesion: true,
    fechaCreacion: true,
    fechaActualizacion: true,
  } as const;

  constructor(private readonly prisma: PrismaUsuariosService) {
    super();
  }

  async create(data: CrearUsuario): Promise<Usuario> {
    const contrasenaEncriptada = data.contrasena
      ? await bcrypt.hash(data.contrasena, 10)
      : undefined;

    return this.prisma.usuario.create({
      data: {
        nombre: data.nombre,
        edad: data.edad,
        biografia: data.biografia,
        peso: data.peso,
        altura: data.altura,
        nacionalidad: data.nacionalidad,
        genero: data.genero,
        ciudad: data.ciudad,
        pais: data.pais,
        numero: data.numero,
        correo: data.correo,
        contrasena: contrasenaEncriptada,
        signoZodiacal: data.signoZodiacal,
        queBusca: data.queBusca,
        ubicacion: data.ubicacion,
        hobbie: data.hobbie,
        profesion: data.profesion,
      },
      select: this.usuarioSelect,
    });
  }

  async findAll(): Promise<Usuario[]> {
    return this.prisma.usuario.findMany({
      select: this.usuarioSelect,
      orderBy: {
        idUsuario: 'asc',
      },
    });
  }

  async findOne(idUsuario: number): Promise<Usuario> {
    const usuario = await this.prisma.usuario.findUnique({
      where: { idUsuario },
      select: this.usuarioSelect,
    });

    if (!usuario) {
      throw new NotFoundException(`No existe un usuario con id ${idUsuario}`);
    }

    return usuario;
  }

  async update(
    idUsuario: number,
    data: ActualizarUsuario,
  ): Promise<Usuario> {
    const usuarioExistente = await this.prisma.usuario.findUnique({
      where: { idUsuario },
    });

    if (!usuarioExistente) {
      throw new NotFoundException(`No existe un usuario con id ${idUsuario}`);
    }

    const contrasenaEncriptada = data.contrasena
      ? await bcrypt.hash(data.contrasena, 10)
      : undefined;

    return this.prisma.usuario.update({
      where: { idUsuario },
      data: {
        nombre: data.nombre,
        edad: data.edad,
        biografia: data.biografia,
        peso: data.peso,
        altura: data.altura,
        nacionalidad: data.nacionalidad,
        genero: data.genero,
        ciudad: data.ciudad,
        pais: data.pais,
        numero: data.numero,
        correo: data.correo,
        contrasena: contrasenaEncriptada,
        signoZodiacal: data.signoZodiacal,
        queBusca: data.queBusca,
        ubicacion: data.ubicacion,
        hobbie: data.hobbie,
        profesion: data.profesion,
      },
      select: this.usuarioSelect,
    });
  }

  async remove(idUsuario: number): Promise<Usuario> {
    const usuarioExistente = await this.prisma.usuario.findUnique({
      where: { idUsuario },
      select: this.usuarioSelect,
    });

    if (!usuarioExistente) {
      throw new NotFoundException(`No existe un usuario con id ${idUsuario}`);
    }

    await this.prisma.usuario.delete({
      where: { idUsuario },
    });

    return usuarioExistente;
  }
}