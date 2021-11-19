import { from, reduce, scan } from "rxjs";



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