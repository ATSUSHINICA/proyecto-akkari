import {Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import {Usuario} from '../usuario/usuario.entity'


@Entity({name: "USUARIO_PELICULA"})
export class UsuarioPelicula{

    /* Decidí utilizar PrimaryColumn y no PrimaryGeneratedColumn debido a que esta tabla trabajará solo con los datos 
    que se crearon, no generará un usuario con un id random, de eso se encarga usuario*/ 

    @PrimaryColumn({name: "id_usuario"})
    idUsuario:number;

    @PrimaryColumn({name: "id_usuario"})
    idPelicula:number;

    @ManyToOne(() => Usuario, (usuario) => usuario.peliculas)
    @JoinColumn({name: 'id_usuario'})
    usuario!: Usuario;

    // Ahora hay que hacer las relaciones con las entidades usuario y peliculas 
    // Usuario

}