import { fromEvent, interval, sample } from "rxjs";


const interval$ = interval(500);
const click$ = fromEvent(document, 'click');

interval$.pipe(
    sample(click$) // se emite el valor del intervalo o obsevable cuando se activa el evento
).subscribe(console.log);

