import './App.css';
import React, {useEffect, useContext} from 'react';
import GlobalContext from './Context';
import StarshipsList from './StarshipsList';
import StarshipsDetails from './StarshipsDetails';
import axios from "axios"; 


function App() {
    const ctx = useContext(GlobalContext);
    
    useEffect(()=>{
        axios
        .get("https://swapi.dev/api/starships/")
        .then(data => {
            ctx.dispatchSharshipsFunction(data.data.results);
            ctx.updateMoviesLoadedMethod(true);
        })
        .catch(error => console.log(error));
    }, []);
    
    return (
        <div className="App">
            <div className='flex-container'>
                <StarshipsList></StarshipsList>
                <StarshipsDetails></StarshipsDetails>
            </div>
        </div>
    );
}

export default App;
