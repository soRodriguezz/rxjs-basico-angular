import { of, from } from 'rxjs';

/**
 * of = toma argumentos y genera una secuencia
 * from = array, promise, iterable, observable
 */

const observer = {
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
};

const miGenerador = function* () { // funcion generadora
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
};

const miIterable = miGenerador();

// for (const id of miIterable) {
//     console.log(id);
// }

from( miIterable ).subscribe( observer );

// const source$ = from([1,2,3,4,5]);
// const source$ = of(...[1,2,3,4,5]);

// const source$ = from('sebastian');
// const source$ = of('sebastian');

const source$ = from( fetch('https://api.github.com/users/soRodriguezz') );
// const source$ = from( fetch('https://api.github.com/users/soRodriguezz/repos') );

// source$.subscribe( resp => {
//     resp.json().then( console.log ); // body de la respuesta
// });



// source$.subscribe(observer);