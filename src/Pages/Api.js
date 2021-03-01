import axios from 'axios';
import { useEffect, useState } from "react";

function Api() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon/pikachu")
            .then((response) => setPosts(response.data));
    }, []);
    const dataPosts = "";
    for(let i = 0 ; i < posts.length ; i++){
        dataPosts += posts[i]
    }
    return (
        <div>
            <h1>Data Pokemon</h1>
            <p>name: {posts.name}</p>
            <p></p>
        </div>
    )
}

export default Api
