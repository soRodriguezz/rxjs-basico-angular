import { catchError, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

const url = 'https://httpbinsd.org/delay/1';

const manejaError = (resp: AjaxError) => {
    console.warn('error', resp.message);
    return of({
        ok: false,
        usuarios: []
    })
};


const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);


// obs$.subscribe( data => {
//     console.log('data', data);
// });

// obs2$.subscribe( data => {
//     console.log('data2', data);
// });


obs$.pipe(
    catchError(manejaError)
).subscribe({
    next: data => console.log('data', data),
    error: error => console.warn('error en subs', error),
    complete: () => console.log('complete')
});

// obs2$.subscribe( data => {
//     console.log('data2', data);
// });

