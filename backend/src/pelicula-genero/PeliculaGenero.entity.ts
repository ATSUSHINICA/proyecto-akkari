import {Pelicula} from '../peliculas/pelicula.entity'
import {Entity, PrimaryColumn, ManyToOne, JoinColumn} from 'typeorm'

@Entity({name: "PELICULA_GENERO"})
export class PeliculaGenero{

    @PrimaryColumn({name: 'id_pelicula'})
    idPelicula!: number;

    @PrimaryColumn({name: 'id_genero'})
    idGenero!: number;

    @ManyToOne(() => Pelicula, (pelicula) => pelicula.genero)
    @JoinColumn({name : 'id_pelicula'})
    pelicula !: Pelicula;
}