import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Genero} from './genero.entity';
import {PeliculaGenero} from '../pelicula-genero/PeliculaGenero.entity';

@Injectable()
export class GeneroService {
    constructor(
        @InjectRepository(Genero)
        private generoRepository : Repository<Genero>,
    ){}

    //mostrar todos los generos
    async mostrarGeneros(){
        return await this.generoRepository.find();
    }

    //mostrar todas las pelis por genero
    async peliculaPorGenero(idGenero: number){

        return await this.generoRepository
        .createQueryBuilder('genero')
        .innerJoinAndSelect('genero.pelicula', 'peliculaGenero')
        .innerJoinAndSelect('peliculaGenero.pelicula', 'pelicula')
        .where('genero.id = :idGenero' , {idGenero})
        .getOne()
    }

}
