import { distinct, from, of } from "rxjs";


const numeros$ = of(1,1,1,3,3,2,2,4,4,5,3,2,1);

numeros$.pipe(
    distinct()   // purga los valores duplicados (===)
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
        nombre: 'Zero'
    }
]; 

from( personajes ).pipe(
    distinct( p => p.nombre ) // purga por === del nombre
).subscribe(console.log);

