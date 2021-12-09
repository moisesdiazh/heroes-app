import { heroes } from "../data/heroes"

//extraremos el publisher de la data de los heroes
export const getHeroesByPublisher = (publisher) => {

    //creamos la constante de lo que queremos validar
    const validPublishers = ['DC Comics', 'Marvel Comics'];
//si es lo contrario a valid publisher, incluyendo los publisher dc comics y marvel comics
    if(!validPublishers.includes(publisher)){ 

        throw new Error(`${publisher} is not a valid publisher`)
    }//este if es para que no puedan colocar otro publisher que no sea marvel o dc

//la función retornara el filtrado de los heroes donde el heroe.publisher sean igual a publisher
    return heroes.filter(hero => hero.publisher === publisher);
}   