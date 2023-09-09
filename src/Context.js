import React, {createContext, useReducer, useEffect, useState} from "react";

const GlobalContext = React.createContext({
    starshipsListArr : [],
    dispatchSharshipsFunction : (finalStarshipsArr) => {},
    singleStarshipObj: {},
    dispatchsingleStarshipObj: (finalSingleStarshipObj) => {},
    moviesLoaded: false,
    updateMoviesLoadedMethod: (newState) => {}
});

const starShipsReduce = (state, action) => {
    if(action.type == 'UPDATESTARSHIP'){
         return {
             ...state, 
             starshipsArr: action.val
        };
        return action.val;
    }else if(action.type == 'UPDATESINGLESTARSHIP'){
        return {
            ...state,
            singleStarshipObj: action.val
        };
    }else{
        return state;
    }
};

export const GlobalContextProvider = (props) => {
    const [moviesLoaded, updateMoviesLoaded] = useState(false);
    const updateMoviesLoadedMethod = (newState) => {
        updateMoviesLoaded(newState);
    };
    const dummyStarshipsData = {starshipsArr: [], singleStarshipObj: {}};
    const [starshipsData, dispatchStarshipsArr] = useReducer(starShipsReduce, dummyStarshipsData);
    const dispatchSharshipsFunction = (finalStarshipsArr) => {
        dispatchStarshipsArr({type: 'UPDATESTARSHIP', val: finalStarshipsArr});
    };
    const dispatchsingleStarshipObj = (finalSingleStarshipObj) => {
        dispatchStarshipsArr({type: 'UPDATESINGLESTARSHIP', val: finalSingleStarshipObj});
    };

    return <GlobalContext.Provider 
    value={{
        starshipsListArr: starshipsData.starshipsArr, 
        dispatchSharshipsFunction:dispatchSharshipsFunction,
        singleStarshipObj: starshipsData.singleStarshipObj,
        dispatchsingleStarshipObj: dispatchsingleStarshipObj,
        moviesLoaded: moviesLoaded,
        updateMoviesLoadedMethod: updateMoviesLoadedMethod
    }}>
     {props.children}   
    </GlobalContext.Provider>;
};

export default GlobalContext;