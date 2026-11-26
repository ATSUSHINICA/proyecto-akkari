import {Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import {Usuario} from '../usuario/usuario.entity'
import {Pelicula} from '../peliculas/pelicula.entity'

@Entity({name: "USUARIO_PELICULA"})
export class UsuarioPelicula{

    /* Decidí utilizar PrimaryColumn y no PrimaryGeneratedColumn debido a que esta tabla trabajará solo con los datos 
    que se crearon, no generará un usuario con un id random, de eso se encarga usuario*/ 

    @PrimaryColumn({name: "id_usuario"})
    idUsuario:number;

    @PrimaryColumn({name: "id_pelicula"})
    idPelicula:number;

    // Relacion con Usuario
    @ManyToOne(() => Usuario, (usuario) => usuario.peliculas)
    @JoinColumn({name: 'id_usuario'})
    usuario!: Usuario;

    // Relacion con Pelicula
    @ManyToOne(() => Pelicula, (pelicula) => pelicula.usuario)
    @JoinColumn({name: 'id_pelicula'})
    pelicula !: Pelicula;

}