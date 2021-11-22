

import { debounceTime, fromEvent, map, mergeAll, mergeMap, Observable, pluck, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GithubUser, GithubUsersResponse } from "../interfaces/github-users.interface";

// referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

// helpers
const mostrarUsuarios = (usuarios: GithubUser[]) => {
    console.log(usuarios);
    orderList.innerHTML = '';

    for (const usuario of usuarios) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;
        
        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver página';
        anchor.target = '_blank';

        li.append(img);
        li.append(usuario.login + ' ');
        li.append(anchor);

        orderList.append(li);
    }
}

// streams
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    map<KeyboardEvent, string>(e => e.target['value']),
    mergeMap<string, Observable<GithubUsersResponse>>( 
        texto => ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)
    ),
    map<any, GithubUser[]>(item => item.items)
);//.subscribe( mostrarUsuarios );

const url = 'https://httpbin.org/delay/1?arg=';

// input$.pipe(
//     pluck('target', 'value'),
//     mergeMap( texto => ajax.getJSON(url + texto) )
// ).subscribe(console.log);


input$.pipe(
    pluck('target', 'value'),
    switchMap( texto => ajax.getJSON(url + texto) )
).subscribe(console.log);