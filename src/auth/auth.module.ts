// src/auth/auth.module.ts:
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthApplication } from './aplicacion/auth.application';
import { AuthController } from './infraestructura/auth.controller';
import { AuthService } from './infraestructura/auth.service';
import { JwtStrategy } from './infraestructura/jwt.strategy';

type JwtExpiresIn = '15m' | '30m' | '1h' | '12h' | '1d' | '7d' | '30d';

function obtenerJwtExpiresIn(): JwtExpiresIn {
  const valor = process.env.JWT_EXPIRES_IN;

  if (
    valor === '15m' ||
    valor === '30m' ||
    valor === '1h' ||
    valor === '12h' ||
    valor === '1d' ||
    valor === '7d' ||
    valor === '30d'
  ) {
    return valor;
  }

  return '30d';
}

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET ?? 'JwtClaveSecreta',
      signOptions: {
        expiresIn: obtenerJwtExpiresIn(),
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthApplication, AuthService, JwtStrategy],
  exports: [AuthApplication, AuthService],
})
export class AuthModule { }  