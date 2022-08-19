import { buscarHeroe, buscarHeroeAsync } from "./promesas";


const heroesIds = ['capi', 'iron', 'spidy'];

export const obtenerHeroesArr = async () => {
    const heroesArr = [];
    for (const id of heroesIds) {
        const heroe = await buscarHeroeAsync(id);
        heroesArr.push(heroe);
    }

    return heroesArr;
}

export const obtenerHeroesArrFast = async () => {
    // const heroesArr = [];
    // for(const id  of heroesIds){
    //     heroesArr.push(buscarHeroeAsync(id));
    // }

    // return await Promise.all(heroesArr);

    ///Forma mejorada
    return await Promise.all(heroesIds.map(buscarHeroe));
};

export const obtenerHeroeAwait = async (id) => {
    try {

        const heroe = await buscarHeroeAsync(id);
        return heroe;

    } catch (err) {
        throw err;

    }
};
