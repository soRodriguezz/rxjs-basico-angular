import { concatMap, fromEvent, interval, switchMap, take } from "rxjs";


const interval$ = interval(1000).pipe(
    take(3)
);

const click$ = fromEvent(document, 'click');

click$.pipe(
    // switchMap(() => interval$) // reinicia el intervalo cada vez que se hace click
    concatMap(() => interval$) // no reinicia el intervalo cada vez que se hace click
).subscribe(console.log);

