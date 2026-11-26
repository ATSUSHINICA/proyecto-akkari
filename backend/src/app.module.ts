import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { PeliculasModule } from './peliculas/peliculas.module';

@Module({
  imports: [UsuarioModule, PeliculasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
