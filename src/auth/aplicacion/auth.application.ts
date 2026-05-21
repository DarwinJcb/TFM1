// src/auth/auth.application.ts:
import { Injectable } from '@nestjs/common';
import { LoginDto } from '../infraestructura/login.dto';
import { AuthService } from '../infraestructura/auth.service';

@Injectable()
export class AuthApplication {
    constructor(private readonly authService: AuthService) { }

    login(loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }
}