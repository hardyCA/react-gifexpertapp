import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categoria, setCategoria] = useState(['One Punch'])

    return (
        <>
            <h2>GifExzpertApp</h2>
            <AddCategory setCategoria={setCategoria} />
            <hr />
            <ol>
                {
                    categoria.map((category) =>
                        <GifGrid
                            categoria={category}
                            key={category}
                        />
                    )
                }

            </ol>
        </>
    )
}



