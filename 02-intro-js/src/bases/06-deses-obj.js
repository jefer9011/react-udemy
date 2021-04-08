// Desestructuracion
// Asignacion Desesctruturante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

const usecontex = ( { nombre, edad, clave, rango = 'Avenger' } ) => {
  // console.log(nombre, edad, clave, rango);

  return {
      nombreClave: clave,
      anios: edad,
      latlng: {
          lat: 14.3241,
          lng: -12.6548
        } 
  }
}
const {nombreClave, anios, latlng:{lat, lng}} = usecontex( persona )

console.log(nombreClave, anios);
console.log(lat, lng);