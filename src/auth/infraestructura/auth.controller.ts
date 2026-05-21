// src/auth/auth.controller.ts:
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthApplication } from '../aplicacion/auth.application';
import { UsuarioAutenticado } from '../dominio/usuario-autenticado.interface';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LoginDto } from './login.dto';

interface RequestConUsuario extends Request {
    user: UsuarioAutenticado;
}

@Controller('auth')
export class AuthController {
    constructor(private readonly authApplication: AuthApplication) { }

    @Post('login')
    login(@Body() loginDto: LoginDto) {
        return this.authApplication.login(loginDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get('perfil')
    perfil(@Req() request: RequestConUsuario) {
        return request.user;
    }
}