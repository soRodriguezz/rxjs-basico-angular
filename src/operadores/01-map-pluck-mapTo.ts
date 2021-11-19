import { fromEvent, range } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';

// range(1, 5)
// .pipe(
//     map<number, string>(x => (x * 10).toString())
// )
// .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

keyup$.pipe(
    map(e => e.code) // transmuta la data o la retorna como quiera
).subscribe(console.log);

keyup$.pipe(
    pluck('target', 'baseURI') // se buscan las propiedades por string en el KeyBoardEvent
).subscribe(console.log);

keyup$.pipe(
    mapTo('tecla presionada')  // retorna el valor que quiera al subscribirse
).subscribe(console.log);