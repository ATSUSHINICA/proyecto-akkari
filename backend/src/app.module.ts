import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { PeliculasModule } from './peliculas/peliculas.module';
import { GeneroModule } from './genero/genero.module';

@Module({
  imports: [UsuarioModule, PeliculasModule, GeneroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
