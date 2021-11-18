
import { Observable, Observer } from 'rxjs';

const observer: Observer<string> = {
    next: (value) => console.log('next: ', value),
    error: (error) => console.warn('error: ', error),
    complete: () => console.info('complete')
};

const intervalo$ = new Observable<number>(subs => {
    let count = 0;

    const interval = setInterval(() =>  {
        count++;
        subs.next(count);
    }, 1000);

    setTimeout(() => {
        subs.complete();
    }, 4000);

    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }

});

const subs1 = intervalo$.subscribe( num => console.log(observer));
const subs2 = intervalo$.subscribe( num => console.log(observer));

subs1.add(subs2);

setTimeout(() => {
    subs1.unsubscribe();
    console.log("Completado");
}, 6000);
