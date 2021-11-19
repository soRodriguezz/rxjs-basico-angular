import { interval, reduce, take, tap } from "rxjs";

const numbers = [1, 2, 3, 4, 5];

const totalReducer = (accumulator: number, currentValue: number) => {
    return accumulator + currentValue;
};

const total = numbers.reduce(totalReducer, 0);

console.log(total);


interval( 1000 ).pipe(
    take( 7 ),
    tap( console.log ),
    reduce( totalReducer )
).subscribe( console.log );

