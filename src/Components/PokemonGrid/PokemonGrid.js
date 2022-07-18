import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { pokeApi } from '../../api';
import './pokemonGrid.css';

export const PokemonGrid = ({ setPokemons }) => {

    const [results, setResults] = useState([]);

    const loadData = () => {
        pokeApi.get(`pokemon/?limit=10`)
            .then(resp => {
                for (let i = 0; i < resp.data.results.length; i++) {
                    axios.get(resp.data.results[i].url)
                        .then(result => {
                            setResults(results => [...results, result.data])
                        })
                }
            })
    }

    useEffect(loadData, []);

    const handleSelected = (name) => {
        setPokemons(name);
    }

    return (
        <>
            <div className='card-grid'>
                {
                    results.map((pokemon, index) => {
                        return (
                            <div key={index} className='card' onClick={()=>handleSelected(pokemon.name)}>
                                <img
                                    src={pokemon.sprites.other.home.front_default}
                                    alt={pokemon.name}
                                />
                                <p>{`#${pokemon.id}`}</p>
                                <p>{pokemon.name}</p>
                            
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}
