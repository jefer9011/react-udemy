
import getHeroById from './bases/08-import.-export'

/* const promesa = new Promise( ( resolve, reject ) => {
    setTimeout(() => {
        const p1 = getHeroById(2);
        resolve(p1)
    }, 1000);
});

promesa.then( ( heroe ) => {
    console.log('then de la promesa');
    console.log('heroe', heroe);
})

.catch( err =>  console.warn(err) ) */

const getHeroeByIdAsync = ( id ) => {
    return new Promise( ( resolve, reject ) => {
        setTimeout(() => {
            // Tarea
            const p1 = getHeroById(id);
            p1 ? resolve(p1) : reject(console.log('No hay heroe')) ;
            
            // reject(p1)
           // resolve(p1)
        }, 1000);
    });
}

getHeroeByIdAsync(10)
        .then( console.log)
        .catch( console.warn ) 
