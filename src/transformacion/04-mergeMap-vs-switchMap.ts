import { fromEvent, interval, mergeMap, switchMap } from "rxjs";



const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);

click$.pipe(
    switchMap(() => interval$) // completa el observable anterior
    // mergeMap(() => interval$) // no completa el observable anterior y estan ambos
).subscribe(console.log);