import { obtenerHeroeAwait, obtenerHeroesArr, obtenerHeroesArrFast } from './js/await';
import { promesaLenta, promesaMedia, promesaRapida } from './js/promesas';
import { buscarHeroe, buscarHeroeAsync } from './js/promesas';


// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

// Promise.race([promesaLenta,promesaMedia,promesaRapida])
//     .then(console.log);

// buscarHeroe('capi').then(heroe => console.log(heroe));

// buscarHeroeAsync('iron').then(console.log)
//     .catch(console.warn);


// obtenerHeroesArr().then(console.table);
// obtenerHeroesArrFast().then(console.table);

obtenerHeroeAwait('capi2').then(console.table).catch(console.warn);


