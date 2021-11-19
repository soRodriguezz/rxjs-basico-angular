import { fromEvent, map, tap } from "rxjs";

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas nec risus luctus facilisis. Suspendisse quis tellus condimentum, imperdiet nisi id, feugiat lectus. Donec at erat tristique, dictum erat at, tempor tortor. Sed euismod volutpat tortor non tincidunt. Suspendisse eget orci arcu. Aenean eu libero tempor, lacinia lectus nec, condimentum magna. Phasellus interdum purus sed felis finibus, vel faucibus felis tincidunt. Donec malesuada sem eget aliquet luctus. Pellentesque auctor diam diam, in elementum diam vulputate ac. Maecenas vehicula vitae justo a ornare. Maecenas at massa vel lacus bibendum tristique. Cras sapien arcu, finibus fringilla felis ac, interdum facilisis odio. Vivamus scelerisque ligula quis turpis condimentum lobortis ac non turpis.
<br /><br />
Nunc mollis sapien velit. Suspendisse efficitur vel neque sit amet mollis. In pellentesque ultrices orci eget sagittis. Quisque massa tellus, dapibus sed leo eu, tempor scelerisque leo. Phasellus blandit accumsan magna, quis bibendum enim rhoncus ac. Vivamus ac fermentum quam, id lacinia dui. Quisque a lobortis erat. Proin augue lorem, malesuada at massa in, rutrum pretium libero. In hac habitasse platea dictumst. Suspendisse consectetur magna nulla, ac aliquet lectus varius quis.
<br /><br />
Phasellus auctor consequat ante. In ac quam ut neque condimentum maximus nec in ante. Sed finibus cursus lobortis. Praesent faucibus sem sit amet vehicula porta. Aliquam in vestibulum leo. Etiam tellus nibh, aliquet ut sagittis gravida, feugiat non arcu. Donec elementum velit a porttitor semper. Nulla sit amet augue a nisi bibendum vulputate nec ac est. Quisque vehicula dictum eros eu varius. Etiam eget euismod arcu, in vehicula dolor. Sed gravida blandit magna, dictum tempor tortor condimentum nec. Proin molestie magna maximus mi malesuada ultricies. Donec vitae tincidunt arcu. Nunc semper, massa ac ullamcorper porta, tellus lorem commodo ante, vel interdum sem sapien sit amet nibh. Integer luctus ex ac turpis fringilla semper.
<br /><br />
Nullam sollicitudin elit ac sapien elementum, quis fringilla lacus imperdiet. Fusce lacus orci, ultricies eget tellus vel, efficitur fermentum neque. Phasellus placerat gravida euismod. Donec sit amet ipsum faucibus, convallis leo quis, imperdiet neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut elit eros, vulputate vitae augue ac, fermentum rhoncus nisl. Pellentesque posuere quis turpis a ultrices. Praesent vel turpis nulla. Suspendisse vel augue quis mi sagittis elementum. Ut sed tortor ut nunc cursus pharetra. Phasellus ultrices ex vel lectus tempor accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed congue ex. Integer a neque ut neque consequat placerat. Duis accumsan erat ut felis facilisis finibus.
<br /><br />
Vestibulum placerat augue a lectus viverra, ac egestas felis pretium. Sed in vulputate velit. Vivamus congue risus et ipsum fringilla, sit amet volutpat nibh gravida. Sed laoreet fermentum velit. Etiam semper accumsan sem sit amet malesuada. Aliquam et sodales leo. Fusce mollis blandit quam ut congue. Nullam ac tellus a quam consequat faucibus ut eget massa. Praesent placerat cursus massa, sed commodo mauris ullamcorper in. Aliquam erat volutpat. Praesent vel arcu sed leo imperdiet aliquam. In mollis tempor augue, sit amet condimentum ex. Etiam sit amet magna varius, semper dolor nec, facilisis sapien. Aenean sollicitudin nunc eu velit accumsan porta. Nullam eget lobortis nibh.
`;

const body = document.querySelector('body');
body.appendChild(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.appendChild(progressBar);

// funcion que hace el calculo


//streams
const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log);

const calcularPorcentajeScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

const progress$ = scroll$.pipe(
    map(calcularPorcentajeScroll),
    // tap(console.log)
);

progress$.subscribe( porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});