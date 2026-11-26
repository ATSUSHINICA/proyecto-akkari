import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { PeliculasModule } from './peliculas/peliculas.module';
import { GeneroModule } from './genero/genero.module';
import {TypeOrmModule} from '@nestjs/typeorm'
@Module({
  imports: [
    // Aqui se importará los modulos de cada entity que hay en nuestro back
    UsuarioModule, 
    PeliculasModule,
    GeneroModule,

    // Aquí la conexión con la base de datos 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'proyecto_akkari',
      autoLoadEntities: true,
      synchronize: false,
    })

    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
