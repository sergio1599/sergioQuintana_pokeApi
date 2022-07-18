import React, { useState } from 'react'
import { FindPokemon } from '../FindPokemon/FindPokemon';
import { PokemonGrid } from '../PokemonGrid/PokemonGrid';
import { PokemonSelected } from '../PokemonSelected/PokemonSelected';
import './pokemonApp.css'


export const PokemonApp = () => {

    const [pokemons, setPokemons] = useState('');

    return (
        <>

            <h1 className='title'>Listado de Pokemon</h1>
            <div className='container'>
                <div>
                    <FindPokemon setPokemons={setPokemons} />
                    <PokemonGrid setPokemons={setPokemons}/>
                </div>
                <div>
                    <PokemonSelected poke={pokemons} />
                </div>

            </div>

        </>

    )
}
