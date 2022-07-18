import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { pokeApi } from '../../api';
import './pokemonSelected.css'
import { PokemonSprites } from './PokemonSprites';

const pokemon = 'ivysaur';

export const PokemonSelected = ({ poke }) => {

    const [results, setResults] = useState([]);
    const [error, setError] = useState('');


    useEffect(() => {
        if (poke === '') {
        } else {
            const loadData = () => {
                axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`)
                    .then(resp => {

                        setResults(resp.data);
                    })
                    .catch(
                        (error) => {
                            console.log(error);
                            setError('No se encontró el Pokémon');
                        }
                    )
            }
            loadData();
        }

    }, [setResults, poke, setError]);


    if (results.length === 0) return (
        <h1>Busque su pokemon o seleccione uno</h1>
    )

    const { id, weight, types, sprites: { other: { home } }, moves } = results;

    return (
        <>
            <div className='card-selected'>
                <img src={home.front_default} alt={pokemon.name} />
                <p>{`#${id}`}</p>
                <p>{results.name}</p>
                <h1>Types</h1>
                <div className='grid-text'>
                    {
                        types.map((type, index) => {
                            const { name } = type.type;
                            return <p className='text-moves' key={index}>{name}</p>
                        })
                    }
                </div>
                <h1>Peso</h1>
                <p>{`${weight} kg`}</p>
                <h1>Sprites</h1>

                <div className='card-sprites'>
                    {
                        home.front_default
                        && <PokemonSprites img={home.front_default} name={pokemon.name} />
                    }

                    {
                        home.front_female
                        && <PokemonSprites img={home.front_female} name={pokemon.name} />
                    }
                    {
                        home.front_shiny
                        && <PokemonSprites img={home.front_shiny} name={pokemon.name} />
                    }
                    {
                        home.front_shiny_female
                        && <PokemonSprites img={home.front_shiny_female} name={pokemon.name} />
                    }
                </div>
                <h1>Movimientos</h1>
                <div className='grid-text'>
                    {
                        moves.slice(0, 5).map((move, index) => (
                            <p className='text-moves' key={index}>{move.move.name}</p>
                        ))
                    }
                </div>
            </div>



        </>
    )
}

export default PokemonSelected;
