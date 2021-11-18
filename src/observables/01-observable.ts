
import { Observable, Observer } from 'rxjs';

const observer: Observer<string> = {
    next: (value) => console.log('next: ', value),
    error: (error) => console.log('error: ', error),
    complete: () => console.log('complete')
};

// el $ es un estandar para indicar que es un observable
const obs$ = new Observable<string>( subs => {
    subs.next('Hola');

    // Forzar un error
    // const a = undefined;
    // a.nombre = 'Pepe';

    subs.next('Mundo');
    subs.complete(); // para indicar que termino el observable
}); //creacion de observable

obs$.subscribe(observer);