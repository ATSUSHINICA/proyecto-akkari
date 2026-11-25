-- BASE DE DATOS: proyecto_akkari;

-- =========================================
-- TABLA USUARIO
-- =========================================

CREATE TABLE USUARIO (
    id_usuario INTEGER,
    nombre VARCHAR(100) NOT NULL,
    telefono VARCHAR(15),
    correo VARCHAR(150) NOT NULL,
    contrasena VARCHAR(255) NOT NULL,   -- Aparecerá hasheada
    tarjeta CHAR(4) NOT NULL,

    CONSTRAINT pk_usuario PRIMARY KEY (id_usuario),
    CONSTRAINT uq_usuario_correo UNIQUE (correo) -- El correo debe de ser único ya que cada uno tendrá su propio catálogo de pelis
);


-- =========================================
-- TABLA PELICULA
-- =========================================

CREATE TABLE PELICULA (
    id_pelicula INTEGER,
    nombre VARCHAR(150) NOT NULL,
    productora VARCHAR(150) NOT NULL,
    duracion INTEGER NOT NULL,

    CONSTRAINT pk_pelicula PRIMARY KEY (id_pelicula),
    CONSTRAINT ck_pelicula_duracion CHECK (duracion > 0)
);


-- =========================================
-- TABLA GENERO
-- =========================================

CREATE TABLE GENERO (
    id_genero INTEGER,
    nombre VARCHAR(80) NOT NULL,

    CONSTRAINT pk_genero PRIMARY KEY (id_genero),
    CONSTRAINT uq_genero_nombre UNIQUE (nombre)
);


-- =========================================
-- TABLA INTERMEDIA USUARIO_PELICULA
-- =========================================

CREATE TABLE USUARIO_PELICULA (
    id_usuario INTEGER NOT NULL,
    id_pelicula INTEGER NOT NULL,

    CONSTRAINT pk_usuario_pelicula
        PRIMARY KEY (id_usuario, id_pelicula),

    CONSTRAINT fk_usuario_pelicula_usuario
        FOREIGN KEY (id_usuario)
        REFERENCES USUARIO(id_usuario)
        ON DELETE CASCADE,

    CONSTRAINT fk_usuario_pelicula_pelicula
        FOREIGN KEY (id_pelicula)
        REFERENCES PELICULA(id_pelicula)
        ON DELETE CASCADE    -- Coloque eliminar en cascada, porque tiene sentido que al eliminar el usuario se eliminen las pelis que posee --
);


-- =========================================
-- TABLA INTERMEDIA PELICULA_GENERO
-- =========================================

CREATE TABLE PELICULA_GENERO (
    id_pelicula INTEGER NOT NULL,
    id_genero INTEGER NOT NULL,

    CONSTRAINT pk_pelicula_genero
        PRIMARY KEY (id_pelicula, id_genero),

    CONSTRAINT fk_pelicula_genero_pelicula
        FOREIGN KEY (id_pelicula)
        REFERENCES PELICULA(id_pelicula)
        ON DELETE CASCADE,

    CONSTRAINT fk_pelicula_genero_genero
        FOREIGN KEY (id_genero)
        REFERENCES GENERO(id_genero)
        ON DELETE CASCADE        -- Coloque eliminar en cascada, debido a que si se elimina un genero quiero que se eliminen las pelis que estaban de ese listado --
);