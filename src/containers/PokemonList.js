import {Component} from "react";
import CardList from "./CardList";
import './style.css'
import Card from "../components/Card";

const PokemonList = ({pokemon}) => {
    const PokemonArray = pokemon.map(i =>
        <Card
            key={i.name} //THIS IS CRUCIAL! OTHERWISE IT WILL CONFOUND ELEMENTS! Try to type Mew, clicked it, and then remove the w
            img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${i.url.slice(34, -1)}.png`}
            name={i.name.toUpperCase()}
            url={i.url}
        />
    )
    
    return (
        <CardList >
            {PokemonArray}
        </CardList>
    )
}

export default PokemonList;