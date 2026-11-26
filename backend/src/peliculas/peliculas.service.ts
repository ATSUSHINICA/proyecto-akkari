import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm'
import {Pelicula} from './pelicula.entity'
@Injectable() 
export class PeliculasService {

    constructor(
        @InjectRepository(Pelicula)
        private peliculaRepository: Repository<Pelicula>,
    ){}

    //mostrar todas las peliculas
    async mostrarPeliculas(){
        return await this.peliculaRepository.find()
    }
    
}
