import {asyncScheduler, distinctUntilChanged, fromEvent, pluck, throttleTime } from "rxjs";


const click$ = fromEvent(document, 'click');

// click$.pipe(
//     debounceTime(2000)  // controla los eventos a 1, despues de 2 segundos
// ).subscribe(console.log);

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
    throttleTime(2000, asyncScheduler, {
        leading: true, // primer elemento
        trailing: true // ultimo elemento
    }),         // controla los eventos a 1, despues de 2 segundos
    pluck('target', 'value'),   // toma el valor del target
    distinctUntilChanged()      // no vuelve a consultar lo anterior
).subscribe(console.log);