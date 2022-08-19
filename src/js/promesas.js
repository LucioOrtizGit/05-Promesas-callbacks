const heroes = {
    capi:{
        nombre: 'Capitan America',
        poder:'Superfuerza'
    },
    iron:{
        nombre: 'IronMan',
        poder:'Mucho dinero'
    },
    spidy:{
        nombre: 'Spiderman',
        poder:'Telarañas'
    },
}

export const buscarHeroe = (id) =>{
    const heroe = heroes[id];

    return new Promise((resolve,reject)=> {

        if(heroe){
            resolve(heroe);
        }else{
            reject(`No existe heroe con ese id ${id}`)
        }
    });

}

//Asincrono
export const buscarHeroeAsync = async(id) =>{
    const heroe = heroes[id];

        if(heroe){
            return heroe;
        }else{
            throw `No existe heroe con ese id ${id}`;
        };

}

const promesaLenta = new Promise((resolve,reject)=>{
    setTimeout(() =>resolve('Promesa Lenta'),2000);
});

const promesaMedia = new Promise((resolve,reject)=>{
    setTimeout(() =>resolve('Promesa Media'),1500);
});

const promesaRapida = new Promise((resolve,reject)=>{
    setTimeout(() =>resolve('Promesa Rapida'),1000);
});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}