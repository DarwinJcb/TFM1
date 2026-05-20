// src/app.module.ts:
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/infraestructura/usuario.module';
import { PrismaModule } from './prisma/prisma.module';
import { SuscripcionModule } from './suscripcion/infraestructura/suscripcion.module';
import { InteraccionModule } from './interaccion/infraestructura/interaccion.module';
import { MatchModule } from './match/infraestructura/match.module';
import { ChatModule } from './chat/infraestructura/chat.module';
import { MensajeModule } from './mensaje/infraestructura/mensaje.module';
import { MusicaModule } from './musica/infraestructura/musica.module';
import { ConfiguracionComunicacionModule } from './configuracion-comunicacion/infraestructura/configuracion-comunicacion.module';
import { EstadoActividadModule } from './estado-actividad/infraestructura/estado-actividad.module';
import { BloqueoModule } from './bloqueo/infraestructura/bloqueo.module';
import { ReporteModule } from './reporte/infraestructura/reporte.module';
import { FotoUsuarioModule } from './foto-usuario/infraestructura/foto-usuario.module';
import { DonacionModule } from './donacion/infraestructura/donacion.module';
import { RestriccionUsuarioModule } from './restriccion-usuario/infraestructura/restriccion-usuario.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsuarioModule, PrismaModule, SuscripcionModule, InteraccionModule, MatchModule, ChatModule, MensajeModule, MusicaModule, ConfiguracionComunicacionModule, EstadoActividadModule, BloqueoModule, ReporteModule, FotoUsuarioModule, DonacionModule, RestriccionUsuarioModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
