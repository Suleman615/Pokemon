import React, { useState } from "react";
import Display from "./display";




const Search = () => {
    let [pokemon, setPokemon] = useState('')
    let [species, setSpecies] = useState('--')
    let [color, setColor] = useState('--')
    let [height, setHeight] = useState('--')
    let [image, setimage] = useState('--')
    let [found, setFound] = useState(false)
    let [error, setError] = useState(false)

    let [name, setName] = useState("No Pokemon Yet!")


    function savePokemon(event) {
        let pokename = event.target.value
        setPokemon(pokename)
    }
    function updatePokemon(poke) {
        setPokemon(poke)
        fetchData(poke)

    }

    // Define an async function to send the GET request
    async function fetchData(type) {
        fetch('https://graphqlpokemon.favware.tech/v7', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `
                {
                    getPokemon(pokemon: ${type}) {
                        sprite
                        species
                        color
                        height
                    }
                }

                `
            })
        })
            .then((res) => res.json())
            .then((data) => {
                setError(false)
                setColor(data.data.getPokemon.color)
                setHeight(data.data.getPokemon.height)
                setSpecies(data.data.getPokemon.species)
                setimage(data.data.getPokemon.sprite)
                setName(data.data.getPokemon.species)
                setFound(true)

            })
            .catch(error => {
                console.log(error)
                setError(true)
                setFound(false)
            })

    }
    return (
        <>
            <span className="search">
                <input type="text" id="username" onChange={savePokemon} placeholder="Which Pokemon?" />

                <button onClick={() => fetchData(pokemon)} type="submit">Fetch!</button>
            </span>
            <p>out of ideas? Try <span onClick={() => { updatePokemon('pikachu') }}>Pikachu</span>,<span onClick={() => { updatePokemon('charizard') }}> Charizard</span>, <span onClick={() => { updatePokemon('ninetales') }}>Ninetales</span>.</p>
            <Display image={image} color={color} species={species} height={height} name={name} found={found} error={error} />
        </>
    )
}

export default Search;



