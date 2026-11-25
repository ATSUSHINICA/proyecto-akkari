import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import {UsuarioPelicula} from '../usuario-pelicula/usuarioPelicula.entity'

//declaramos el nombre de las entidad que vamos a trabajar de la BD
@Entity({name: "USUARIO"})

export class Usuario{

    // El id del usuario
    @PrimaryGeneratedColumn({name: "id_usuario"})
    id!: number;

    @Column({name: "nombre"})
    nombre!: string;

    @Column({name: "telefono"})
    telefono!: number;

    @Column({name: "correo"})
    correo!: string;

    @Column({name: "contrasena"})
    contrasena!: string;

    @Column({name: "tarjeta"})
    tarjeta!: string;

    /**
     * Varias cosas que mencionar, lo primero es que esta entidad va a trabajar con la entidad de la
     * tabla compuesta que hay en este caso entre Usuario <-> UsuarioPelicula <-> Pelicula, las entidades
     * normales son las fuertes.
     * 
     * Hemos llamado a la varible que almacenará el array de la tabla compuesta, peliculas 
     * ya que al final es la tabla con la que realmente tiene la relación utilizando esta tabla compuesta 
     * como intermediario en la relacion N:M  
     */
    @OneToMany(() => UsuarioPelicula, (usuarioPelicula) => usuarioPelicula.usuario)
    peliculas!:  UsuarioPelicula[];
}