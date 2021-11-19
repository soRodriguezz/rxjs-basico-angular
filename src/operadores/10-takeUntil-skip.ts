import { fromEvent, interval, skip, takeUntil } from "rxjs";



const boton = document.createElement('button');
boton.innerText = 'Detener timer';

document.querySelector('body').append(boton);

const counter$ = interval(1000);
const clickBtn$ = fromEvent(boton, 'click');

counter$.pipe(
    takeUntil(clickBtn$),  // takeUntil: detiene el observable cuando se produce un evento
    skip(3)  // skip: salta los primeros 3 valores
).subscribe(
    {
        next: val => console.log('next:', val),
        complete: () => console.log('complete')
    }
);
