import { endWith, of, startWith } from "rxjs";


const numeros$ = of(1,2,3).pipe(
    startWith(0),   // valor con el que empieza
    endWith(4) // valor con el que termina
);

numeros$.subscribe(console.log);

