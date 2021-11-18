
import { asyncScheduler, range } from 'rxjs';


// asyncScheduler -> para volverlo asincrono
const src$ = range(1, 5, asyncScheduler);

console.log('INICIO');
src$.subscribe( console.log );
console.log('FIN');