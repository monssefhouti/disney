//#region Imports
import React,{useEffect} from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Recommend from './Recommend'
import Viewers from './Viewers'
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import database from '../firebase';
import {useDispatch} from "react-redux";
import {setMovies} from "../features/movies/movieSlice";

//endregion
function Home() {
    const dispatch=useDispatch();
    let recommends=[];
    let original=[];
    let trending=[];
    let newDisney=[];
    useEffect( () => {
        database.collection("movies").onSnapshot( (snap) =>{
                snap.docs.map( (doc) => {
                    switch (doc.data().type)
                    {
                        case "recommend":
                            //return {id:doc.id,...doc.data()}
                            recommends = [...recommends,{id:doc.id,...doc.data()}]
                            break;
                        case "original":
                            //return {id:doc.id,...doc.data()}
                            original = [...original,{id:doc.id,...doc.data()}]
                            break;
                        case "trending":
                            //return {id:doc.id,...doc.data()}
                            trending = [...trending,{id:doc.id,...doc.data()}]
                            break;
                        case "new":
                            //return {id:doc.id,...doc.data()}
                            newDisney = [...newDisney,{id:doc.id,...doc.data()}]
                            break;

                    }
        }); // End of Map
                dispatch(setMovies({
                    recommends:recommends,
                    Original:original,
                    trending:trending,
                    NewDisney:newDisney,
                }));
        }); //End of Snapshot








    }); //End of use Effect


    return(
        <Container>
            <ImgSlider/>
            <Viewers/>
            <Recommend/>
            <NewDisney/>
            <Originals/>
            <Trending/>
        </Container>
    ); // End Of The Return



} // End of Function



export default Home;


//#region Styling
const Container=styled.main `
    min-height:calc(100vh - 70px);
    padding: 0 calc(3.6vw + 5px);
    position:relative;
    overflow-x:hidden;
    &:before {
        background-image:url('/images/home-background.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;

        content:"";
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:-1;
    }

`


//#endregion