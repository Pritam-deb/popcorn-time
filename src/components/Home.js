//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

//API

//components

//hook
import { useState,  useEffect } from "react";
import {useHomeFetch} from '../hooks/useHomeFetch';
//image
import NoImage from '../images/no_image.jpg'



const Home = () => {
    
    
    const {state, loading, error} = useHomeFetch();
    console.log(state)
    return(
        <div>
            haradhan
        </div>
    )
}

export default Home;