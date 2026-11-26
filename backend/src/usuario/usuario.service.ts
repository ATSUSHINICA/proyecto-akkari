import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {Usuario} from './usuario.entity'
import {UsuarioPelicula} from '../usuario-pelicula/usuarioPelicula.entity'
@Injectable()
export class UsuarioService {

    //Creamos es constructor
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository : Repository<Usuario>,

        @InjectRepository(UsuarioPelicula)
        private usuarioPeliculaRepository: Repository<UsuarioPelicula>
    ){}

    // Encontrar usuario por id
    async buscarUsuario(id: number){
        return await this.usuarioRepository.findOneBy({id});
    }

    //eliminar usuario por id 
    async eliminarUsuario(id: number){
        return await this.usuarioRepository.delete({id});
    }

    // listar una peliculas por cada usuario
    async peliPorUsuario(idUsuario: number) {
        return await this.usuarioRepository
        .createQueryBuilder('usuario')
        .innerJoinAndSelect('usuario.peliculas', 'usuarioPelicula')
        .innerJoinAndSelect('usuarioPelicula.pelicula', 'pelicula')
        .where('usuario.id = :idUsuario', {idUsuario})
        .getOne()
    }

    // Este metodo sirve para añadir en la tabla compuesta las pelicula nueva y la relacion con el usuario 

    async añadirPeliUsuario(idUsuario: number, idPelicula: number, vecesVista: number){
        
        const query = this.usuarioPeliculaRepository.create({idUsuario, idPelicula, vecesVista});
        return await this.usuarioPeliculaRepository.save(query);
        
    }

    


}
