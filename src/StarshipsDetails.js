import React, {Fragment, useContext} from "react";
import GlobalContext from "./Context";

const StarshipsDetails = () => {
    const ctx = useContext(GlobalContext);
    const abcd = 'false';
    
    return <Fragment>
        <div className="detailsclass">
            {<h3>Starships Details:</h3>}
            {!ctx.moviesLoaded && <p>Waiting for list to load</p>}
            {ctx.moviesLoaded && !ctx.singleStarshipObj.name && <p>Click list item for details</p>}
            {ctx.singleStarshipObj.name && <div><ul>
                <li>Name: {ctx.singleStarshipObj.name}</li>
                <li>Model: {ctx.singleStarshipObj.model}</li>
                <li>Manufacturer: {ctx.singleStarshipObj.manufacturer}</li>
                <li>Starship Class: {ctx.singleStarshipObj.starship_class}</li>
                <li>Passengers: {ctx.singleStarshipObj.passengers}</li>
            </ul></div>
            }
        </div>
    </Fragment>;
};

export default StarshipsDetails;