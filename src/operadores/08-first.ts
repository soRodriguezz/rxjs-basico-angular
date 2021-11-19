import { first, fromEvent, map, take, tap } from "rxjs";

const click$ = fromEvent<PointerEvent>( document, 'click');

click$.pipe(
    tap( () => console.log('sdfsfsd')),
    map<PointerEvent, any>( ({ clientY, clientX }) => ({ clientY, clientX })),
    first<PointerEvent>(event => event.clientX >= 150) // ejecuta una sola vez
).subscribe( {
    next: ( event ) => console.log( 'click', event ),
    complete: () => console.log( 'complete' )
} );