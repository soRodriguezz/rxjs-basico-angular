import { map, reduce, scan } from "rxjs/operators";
import { from } from "rxjs";

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const totalReducer = (accumulator: number, currentValue: number) => {
//     return accumulator + currentValue;
// };

const totalReducer = (accumulator: number, currentValue: number) => accumulator + currentValue;

from( numeros ).pipe(
    reduce(totalReducer, 0)
).subscribe( console.log );

from( numeros ).pipe(
    scan(totalReducer, 0)
).subscribe( console.log );

// Redux
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
};

const user: Usuario[] = [
    {
        id: 'ABC123',
        autenticado: false,
        token: null
    },
    {
        id: 'ABC12',
        autenticado: true,
        token: 'ABC'
    },
    {
        id: 'ABC123',
        autenticado: true,
        token: 'ABC123'
    }
];

const state$ = from( user ).pipe(
    scan<Usuario, any>( (accumulator: Usuario, currentValue: Usuario) => {
        return { ...accumulator, ...currentValue }
    }, { edad: 33 })
);

state$.pipe(
    map( state => state.id )
).subscribe( console.log );