import React, {useMemo} from "react";
import { HeroCard } from "./HeroCard";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";

//recibimos el publisher del getHeroesByPublisher por props
export const HeroList = ({ publisher }) => {

  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
      //para que se dispare con el usememo solamente cuando cambie el state publisher

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">

      {
      heroes.map((hero) => (
        // debemos colocar el id obligatorio
        <HeroCard 
            key={hero.id}
            {...hero} //desestructuramos todas las propiedades de hero
        />
      ))
      
      }
    </div>
  );
};
