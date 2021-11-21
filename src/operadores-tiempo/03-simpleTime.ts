import { fromEvent, map, sampleTime } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    sampleTime(2000),    // devuelve el ultimo valor que yo ejecute
    map(({x, y}) => ({x, y})),
).subscribe(console.log);


// tener el sample time abajo consume mas memoria que arriba del map