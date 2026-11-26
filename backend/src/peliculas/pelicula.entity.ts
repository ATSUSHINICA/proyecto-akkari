import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'
import {UsuarioPelicula} from '../usuario-pelicula/usuarioPelicula.entity'

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

    @OneToMany(() => UsuarioPelicula, (usuarioPelicula) => usuarioPelicula.pelicula)
    usuario !: UsuarioPelicula[];
}