import React from 'react'
import { HeroList } from '../hero/HeroList'

export const DcScreen = () => {
    return (
        <div>
            <h1>DC Screen</h1>
            <hr/>
{/* mandamos la lista, debemos de mandar el publisher que queremos ya que colocamos la validación */}
            {/* la validación esta en getHeroesByPublisher */}
            <HeroList publisher="DC Comics"/>

        </div>
    )
}
