import { catchError, of, pluck } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax'

const url = "https://api.github.com/users?per_page=5";

const manejaErrores = (response: Response) => {
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response;
};

const atrapaError = (err: AjaxError) => {
    console.log(err.message);
    return of([]);
}

const fetchPromesa = fetch(url);

// fetchPromesa
//     .then(manejaErrores)
//     .then((data) => data.json())
//     .then(console.log)
//     .catch((error) => console.log(error));

ajax(url).pipe(
    pluck('response'),
    catchError(atrapaError)
).subscribe(users => console.log(users));
