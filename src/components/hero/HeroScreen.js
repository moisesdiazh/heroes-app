import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import {getHeroById} from '../../selectors/getHeroById';



export const HeroScreen = () => {

    const {heroId} = useParams(); //para traernos los argumentos
        //obtenemos el heroId pasado por la url 
    
//creamos uan constante hero el cual usamos la función y le pasamos el heroId extraido de la url
    const hero = useMemo(() => getHeroById(heroId), [heroId]);
            //para que se dispare con el usememo solamente cuando cambie el state heroId

    const navigate = useNavigate(); //creamos la variable navigate

    const handleReturn = () => { //la función que llamamos cuando alguien haga click en regresar
        
        navigate(-1); //para regresar a la vista anterior
    }

    if(!hero){ 
//si no existe el heroe ya que el heroId mandado por la url no coincide, lo redigire al inicio
        return <Navigate to="/" />
    }

    //simplemente para colocar el "hero"
    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    //de donde sacamos las imagenes
    const imagePath = `/assets/${id}.jpg`;

    return (
        <div className="row mt-5">

            <div className="col-4">
                <img src={imagePath} 
                     alt={superhero}
                     className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__bounce">
                <h3>{superhero}</h3>
                <ul class="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego:</b> {alter_ego}</li>
                    <li className="list-group-item"><b>Publisher:</b> {publisher}</li>
                    <li className="list-group-item"><b>First Appearance:</b> {first_appearance}</li>
                </ul>
                <h5 className="mt-3">Characters</h5>
                <p>{characters}</p>
                
                <button 
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                >
                    Regresar
                </button>
            </div>
        </div>
    )
}
