import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'
import {UsuarioPelicula} from '../usuario-pelicula/usuarioPelicula.entity'
import {PeliculaGenero} from '../pelicula-genero/PeliculaGenero.entity'
Entity({name: 'PELICULA'})

export class Pelicula{

    @PrimaryGeneratedColumn({name: 'id_pelicula'})
    id!: number;

    @Column({name: 'nombre'})
    nombre!: string;

    @Column({name: 'productora'})
    productora!: string;

    @Column({name: 'duracion'})
    duracion!: number;

    //Relación con la tabla compuesta usuario-pelicula

    @OneToMany(() => UsuarioPelicula, (usuarioPelicula) => usuarioPelicula.pelicula)
    usuario !: UsuarioPelicula[];

    //Relación con la tabla compuesta pelicula-genero

    @OneToMany(()=> PeliculaGenero, (peliculaGenero) => peliculaGenero.pelicula)
    genero !: PeliculaGenero[];
}