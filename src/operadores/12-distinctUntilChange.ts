import { distinctUntilChanged, from, of } from "rxjs";


const numeros$ = of(1,1,1,3,3,2,2,4,4,5,3,2,1);

numeros$.pipe(
    distinctUntilChanged()   // purga los valores duplicados continuos (===)
                             // no purga si no son continuos
).subscribe(console.log); 

interface Personaje {
    nombre: string;
};

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr. Willy'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr. Willy'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'X'
    }
]; 

from( personajes ).pipe(
    distinctUntilChanged( (anterior, actual) => anterior.nombre === actual.nombre) // purga por === del nombre continuo
).subscribe(console.log);