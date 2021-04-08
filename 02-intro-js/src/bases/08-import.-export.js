import heroes, { owners } from '../data/heroes'

//console.log('wowners array', owners);
// Metodo 1
/* const getHeroById = ( id ) => {
    return heroes.find( ( heroe ) => {
      if(heroe.id === id) {
          return true;
      } else {
          return false;
      }
    });
} */

// Metodo 2
const getHeroById = ( id ) => heroes.find( ( heroe ) => heroe.id === id );
//console.log( getHeroById(2) );
//console.log(heroes);

const gHeroesByOwner = ( owner) => heroes.filter( ( heroe ) => heroe.owner === owner );
//console.log(gHeroesByOwner('DC'));

export default getHeroById;