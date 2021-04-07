const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
       ciudad: 'Bogota',
       zip: 220221,
       lat: 12345689,
       lon: 65432165, 
    }
};

console.table(persona);

const persona2 = { ...persona};
persona2.nombre = 'Peter';
console.log(persona2);