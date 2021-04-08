

const perosnajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , per1 ] = perosnajes;
console.log(per1);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// Tarea

const usestate = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola mundo');}];

}

// Desestructurar arreglo
const [nombre, setNombre] = usestate('Goku');
console.log(nombre);
setNombre()
//arre[1]();
