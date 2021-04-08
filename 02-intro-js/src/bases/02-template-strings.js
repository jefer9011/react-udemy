
// Variables y constantes

const nombre = 'Jeferson';
const apellido = 'Grueso';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `
    ${ nombre }
    ${ apellido }
    ${ 1+1 }
     `;

    function getSaludo(nombre) {
        return 'Hola ' + nombre;
    }

    
console.log(`Este es un texto ${ getSaludo( nombre ) }`);

 