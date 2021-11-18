import { asyncScheduler } from 'rxjs';

setTimeout(() => {}, 3000);
setInterval(() => {}, 3000);

const saludar = () => console.log('Hola Mundo');
const saludar2 = (nombre) => console.log(`Hola ${ nombre }`);

asyncScheduler.schedule( saludar, 2000 ); // Ejecuta la función en 2 segundos

// Ejecuta la función en 2 segundos y le pasa el parámetro 'Sebastian'
// asyncScheduler.schedule( saludar2, 2000, 'Sebastian' ); 

const subs = asyncScheduler.schedule( function(state) {
    console.log('state: ', state);
    this.schedule( state + 1, 1000 ); // Ejecuta la función en 1 segundo
}, 3000, 0 );

// setTimeout(() => {
//     subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule( () => subs.unsubscribe(), 6000 );
