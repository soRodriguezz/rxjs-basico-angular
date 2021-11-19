import { fromEvent, map, takeWhile } from "rxjs";

const click$ = fromEvent<PointerEvent>( document, 'click');

click$.pipe(
    map(({ x, y }) => ({ x, y })),
    // takeWhile( ({ y }) => y <= 150, true) // devuelve el ultimo valor aunque no cumpla la condicion
    takeWhile( ({ y }) => y <= 150)
).subscribe( {
    next: ({ x, y }) => console.log( 'click', { x, y } ),
    complete: () => console.log( 'complete' )
});
