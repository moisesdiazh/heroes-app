import {heroes} from '../data/heroes';

    //recibimos el id con un string vacio
export const getHeroById = (id = '') => {

    return heroes.find(hero => hero.id === id);
    //buscamos en la data de heroes un heroe cuyo id sea igual al que le pasemos
}