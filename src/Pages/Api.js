import axios from 'axios';
import { useEffect, useState } from "react";

function Api() {
    const [posts, setPosts] = useState({
        abilities:[],
        moves:[]
    });
    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon/pikachu")
            .then((response) => setPosts(response.data));
    }, []);
    console.log(posts)
    return (
        <div>
            <h1>Data Pokemon</h1>
            <p>Name: {posts.name}</p>
            <p>Abilities:</p>
            {posts.abilities.map((item,id) => (
                <div key={id}>
                    <ul>
                        <li>{item.ability.name}</li>
                    </ul>
                </div>
            ))}
            <p>Moves:</p>

            {posts.moves.map((item,id) => (
                <div key={id}>
                    <ul>
                        <li>{item.move.name}</li>
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Api
