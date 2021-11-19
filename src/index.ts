import { first, fromEvent, take, tap } from "rxjs";

const click$ = fromEvent<PointerEvent>( document, 'click');

click$.pipe(
    tap( () => console.log('sdfsfsd')),
    first<PointerEvent>(event => event.clientX >= 150) // ejecuta una sola vez
).subscribe( {
    next: ( event ) => console.log( 'click', event ),
    complete: () => console.log( 'complete' )
} );




