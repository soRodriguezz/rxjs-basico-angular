import { auditTime, fromEvent, tap } from "rxjs";


const click$ = fromEvent<PointerEvent>(document, 'click');



click$.pipe(
    tap(() => console.log('tap')),
    auditTime(3000)    // devuelve el ultimo valor emitido dentro de los 3 segundos
).subscribe(console.log);

