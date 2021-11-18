import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: value => console.log("next: ", value),
  error: error => console.warn("error: ", error),
  complete: () => console.info("complete"),
};

const intervalo$ = new Observable<number>((subs) => {
  const intervalID = setInterval(() => subs.next(Math.random()), 1000);
  
  return () => {
    clearInterval(intervalID);
    console.log("Intervalo destruido");
  };
});

/*
    1- casteo multiple
    2- es un observer
    3- next, error, complete
*/

const subject$ = new Subject(); 

const intervalSubject = intervalo$.subscribe(subject$);

// const subs1 = intervalo$.subscribe(random => {
//     console.log("subs1: ", random);
// });

// const subs2 = intervalo$.subscribe(crandom => {
//     console.log("subs2: ", crandom);
// });

const subs1 = subject$.subscribe(observer);

const subs2 = subject$.subscribe(observer);



setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    intervalSubject.unsubscribe();
}, 3500);