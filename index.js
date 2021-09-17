class Usuario {
    constructor(strNombre, strApellido) {
        this.nombre = strNombre
        this.apellido = strApellido
        this.libros = []
        this.mascotas = []

    }

    getFullName() {
        return `Mi nombre completo es ${this.nombre} ${this.apellido}`
    }
    addMascota(unaMascota) {
        this.mascotas.splice(this.mascotas.length, 0, unaMascota) // o podria ser un simple push.
    }

    countMascotas() {
        return this.mascotas.length
    }

    addBook(nombreDelLibro, autor) {
        const newBook = { nombre: nombreDelLibro, autor: autor }
        this.libros = [...this.libros, newBook] // tambien podria ser un push
    }

    getBookNames() {
        return this.libros.reduce((acc, elem) => {
            return [...acc, elem.nombre]
        }, [])


    }
}