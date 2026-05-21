// src/auth/auth.service.ts:
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaUsuariosService } from '../../prisma/prisma-usuarios.service';
import { JwtPayload } from '../dominio/jwt-payload.interface';
import { LoginDto } from './login.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly prismaUsuarios: PrismaUsuariosService,
        private readonly jwtService: JwtService,
    ) { }

    async login(loginDto: LoginDto) {
        const usuario = await this.prismaUsuarios.usuario.findUnique({
            where: {
                correo: loginDto.correo,
            },
        });

        if (!usuario) {
            throw new UnauthorizedException('Credenciales incorrectas');
        }

        if (!usuario.contrasena) {
            throw new UnauthorizedException(
                'El usuario no tiene contraseña registrada',
            );
        }

        const contrasenaValida = await bcrypt.compare(
            loginDto.contrasena,
            usuario.contrasena,
        );

        if (!contrasenaValida) {
            throw new UnauthorizedException('Credenciales incorrectas');
        }

        const payload: JwtPayload = {
            idUsuario: usuario.idUsuario,
            correo: usuario.correo,
        };

        const accessToken = await this.jwtService.signAsync(payload);

        return {
            accessToken,
            usuario: {
                idUsuario: usuario.idUsuario,
                nombre: usuario.nombre,
                correo: usuario.correo,
            },
        };
    }
}