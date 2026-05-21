// src/auth/auth.module.ts:
import { Module } from '@nestjs/common';
import { AuthService } from './infraestructura/auth.service';
import { AuthController } from './infraestructura/auth.controller';

@Module({
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule { }
