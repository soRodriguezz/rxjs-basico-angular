import { fromEvent } from "rxjs";

/*
    Eventos del DOM
*/

const src$ = fromEvent<PointerEvent>(document, "click");
const src1$ = fromEvent<KeyboardEvent>(document, "keyup");

const observer = {
    next: val => console.log("next: ", val),
};

// src$.subscribe(observer);

src$.subscribe( ({ x, y }) => {
    console.log(y, x);
});

src1$.subscribe(evento => console.log(evento.key));
