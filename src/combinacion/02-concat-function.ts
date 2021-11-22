import { concat, interval, take } from "rxjs";



const interval$ = interval(1000);

concat(  // concatena observables
    interval$.pipe(take(3)),
    interval$.pipe(take(2))
).subscribe(console.log);