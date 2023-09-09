import React, {Fragment, useContext} from "react";
import GlobalContext from "./Context";

function StarshipsList(){
    const ctx = useContext(GlobalContext);
   
    const indvlItemClick = (event, starshipName) => {
        ctx.starshipsListArr.map((singleStarshipObj) => {
            if(singleStarshipObj.name == starshipName){
                ctx.dispatchsingleStarshipObj(singleStarshipObj);
                
                console.log(singleStarshipObj);
            }
        });
    };

    return <Fragment>
        <div className="starshiplist">
            <h3>StarshipsList</h3>
            
            <ul>
            {!ctx.moviesLoaded && <p>Starships Loading</p>}
                {ctx.moviesLoaded && ctx.starshipsListArr.map((singleStarship) => 
                    <li onClick={(event) =>{indvlItemClick(event, singleStarship.name)}}>Name: {singleStarship.name} Class: {singleStarship.starship_class}</li>
                )}
            </ul>

        </div>
    </Fragment>
}

export default StarshipsList;