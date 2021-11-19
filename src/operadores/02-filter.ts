import { filter, from, fromEvent, map, range } from "rxjs";

// range(1, 10).pipe(
//     filter(x => x % 2 === 0) // devuelve los pares
// ).subscribe( console.log )

// range(1, 5).pipe(
//     filter( (x, i) => {
//         console.log("index", i);
//         console.log(`${i} - ${x}`);
//         return x % 2 === 0;
//     }) // devuelve los pares
// ).subscribe( console.log )

const personajes = [
    {
        tipo: "heroe",
        nombre: "Batman"
    },
    {
        tipo: "villano",
        nombre: "Joker"
    },
    {
        tipo: "heroe",
        nombre: "aquaman"
    },
];

from(personajes).pipe(
    filter(personaje => personaje.tipo === "heroe")
).subscribe( console.log );


fromEvent<KeyboardEvent>(document, "keyup")
    .pipe(
        map( event => event.key ),
        filter( key => key === "Enter")
    )
    .subscribe( console.log );