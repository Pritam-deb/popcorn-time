//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
//components

//hook
import { useState } from "react";
//image
import NoImage from '../images/no_image.jpg'



const Home = () => {
    
    const [state, setState] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    return(
        <div>
            HOme Page
        </div>
    )
}

export default Home;