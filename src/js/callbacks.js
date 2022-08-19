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

//callback retorna...
export const buscarHeroe = (id,callback) => {
    const heroe = heroes[id];

    if(heroe){
        callback(null,heroe);
    }else{
        //error
        callback(`No existe heroe con ese id ${id}`);
    }
}