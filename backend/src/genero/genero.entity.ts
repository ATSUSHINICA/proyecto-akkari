import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'
import {PeliculaGenero} from '../pelicula-genero/PeliculaGenero.entity'
@Entity({name: 'GENERO'})

export class Genero{

    @PrimaryGeneratedColumn({name: 'id_genero'})
    id!: number;

    @Column({name: 'nombre'})
    nombre!: string;

    // Relación con la tabla compuesta 
    @OneToMany(() => PeliculaGenero, (peliculaGenero) => peliculaGenero.genero )
    pelicula !: PeliculaGenero;
}