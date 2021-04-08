const saludar = ( nombre ) => {
    return `Hola, ${ nombre }`
}

const saludar2 = ( nombre2 ) =>  `Hola, ${ nombre2 }`;
const saludar3 = (  ) =>  `Hola, Jefer`;


console.log( saludar('Goku'));
console.log( saludar2('Vegeta'));
console.log( saludar3());

const getUser = () => 
    ( {
        uid: 'ABC123',
        username: 'jefer9011'
    })

const user = getUser()
console.log( user );

// Tarea

const usuarioActivo = 'user1234'
const getUsuarioActivo = () => 
    ({
        uid: 'ABC567',
        username: `${usuarioActivo}`,
    })
    const activeUser = getUsuarioActivo();
    console.log(activeUser);