import { interval, timer } from "rxjs";

const observer = {
    next: val => console.log("next: ", val),
    complete: () => console.log("complete"),
}

const interval$ = interval(1000); // cada 1 segundo
const timer$ = timer(3000); // timer(3000, 1000); // En 3 segundos, luego cada 1 segundo

const hoyEn5 = new Date(); // valor hoy
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);
const timer2$ = timer(hoyEn5);



console.log('INICIO');
// interval$.subscribe(observer);
// timer$.subscribe(observer);
timer2$.subscribe(observer);
console.log('FIN');