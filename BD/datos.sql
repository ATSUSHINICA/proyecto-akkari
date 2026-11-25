-- =========================================
-- USUARIOS
-- =========================================

INSERT INTO USUARIO (id_usuario, nombre, telefono, correo, contrasena, tarjeta)
VALUES
(1, 'Carlos García', '600123456', 'carlos@gmail.com', 'hash_ejemplo_1', '1234'),
(2, 'Laura Martín', '611234567', 'laura@gmail.com', 'hash_ejemplo_2', '5678'),
(3, 'Pedro Sánchez', '622345678', 'pedro@gmail.com', 'hash_ejemplo_3', '5673');


-- =========================================
-- PELICULAS
-- =========================================

INSERT INTO PELICULA (id_pelicula, nombre, productora, duracion)
VALUES
(1, 'Interestelar', 'Paramount Pictures', 169),
(2, 'Origen', 'Warner Bros', 148),
(3, 'El Señor de los Anillos', 'New Line Cinema', 178),
(4, 'Titanic', '20th Century Fox', 194);


-- =========================================
-- GENEROS
-- =========================================

INSERT INTO GENERO
(id_genero, nombre)
VALUES
(1, 'Ciencia ficción'),
(2, 'Drama'),
(3, 'Aventura'),
(4, 'Romance'),
(5, 'Fantasía');


-- =========================================
-- USUARIO_PELICULA
-- Películas asociadas a cada usuario
-- =========================================

INSERT INTO USUARIO_PELICULA
(id_usuario, id_pelicula)
VALUES
(1, 1),
(1, 2),
(2, 2),
(2, 4),
(3, 1),
(3, 3);


-- =========================================
-- PELICULA_GENERO
-- Géneros asociados a cada película
-- =========================================

INSERT INTO PELICULA_GENERO
(id_pelicula, id_genero)
VALUES
(1, 1),
(1, 2),
(2, 1),
(2, 3),
(3, 3),
(3, 5),
(4, 2),
(4, 4);