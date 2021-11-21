import { debounceTime, fromEvent, map, mergeAll, Observable, pluck } from "rxjs";
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
    map<string, Observable<GithubUsersResponse>>( 
        texto => ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)
    ),
    mergeAll(),
    map<any, GithubUser[]>(item => item.items)
).subscribe( mostrarUsuarios );