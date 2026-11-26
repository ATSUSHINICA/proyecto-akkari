import {Pelicula} from '../peliculas/pelicula.entity'
import {Entity, PrimaryColumn, ManyToOne, JoinColumn} from 'typeorm'
import {Genero} from '../genero/genero.entity'
@Entity({name: "PELICULA_GENERO"})
export class PeliculaGenero{

    @PrimaryColumn({name: 'id_pelicula'})
    idPelicula!: number;

    @PrimaryColumn({name: 'id_genero'})
    idGenero!: number;

    // Relación con pelicula
    @ManyToOne(() => Pelicula, (pelicula) => pelicula.genero)
    @JoinColumn({name : 'id_pelicula'})
    pelicula !: Pelicula;

    // Relación con genero
    @ManyToOne(() => Genero, (genero) => genero.pelicula)
    @JoinColumn({name : 'id_genero'})
    genero !: Genero;

}