// src/auth/infraestructura/jwt.strategy.ts:
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from '../dominio/jwt-payload.interface';
import { UsuarioAutenticado } from '../dominio/usuario-autenticado.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        const jwtSecret = process.env.JWT_SECRET ?? 'JwtClaveSecreta';

        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtSecret,
        });
    }

    validate(payload: JwtPayload): UsuarioAutenticado {
        return {
            idUsuario: payload.idUsuario,
            correo: payload.correo,
        };
    }
}