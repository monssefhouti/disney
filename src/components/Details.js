import React from 'react';
import styled from "styled-components";
import {useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import database from "../firebase";

function Details() {
    const { id } = useParams();
    const [movieData,setMovieData] = useState([]) // its important to initialize the usestate
    useEffect(() =>{
        // grab the movie info from db
        database.collection("movies")
            .doc(id)
            .get()
            .then((doc) =>{
            if(doc.exists)
            {
                //save the movie data
                setMovieData(doc.data());
            }
            else {
                // redirect to home page
            }
        })
    },[id])

    return (
        <Container>
            {movieData && (
                <>
                    <Background>
                        <img src={movieData.backgroundImg} />
                    </Background>
                    <ImgTitle>
                        <img src={movieData.titleImg}/>
                    </ImgTitle>
                    <Controls>
                        <PlayButton>
                            <img src="/images/play-icon-black.png"/>
                            <span>Play</span>
                        </PlayButton>
                        <TrailerButton>
                            <img src="/images/play-icon-white.png"/>
                            <span>Trailer</span>
                        </TrailerButton>
                        <AddButton>
                            <img src="/images/watchlist-icon.svg"/>
                        </AddButton>
                        <GroupWatchButton>
                            <img src="/images/group-icon.png"/>
                        </GroupWatchButton>
                    </Controls>
                    <SubTitle>
                        {movieData.subTitle}
                    </SubTitle>
                    <Description>
                        {movieData.description}
                    </Description>
                </>
            )}

        </Container>
    );
}

export default Details;

//#region Styling
const Container=styled.div `
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
const Background=styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: .8;
  img
  {
    width: 100%;
    height: 100%;
    object-fit: cover;
    
  }
`
const ImgTitle=styled.div`
  display: flex;
  height:30vh;
  margin-top: 10vh;
  width: 30vw;
  align-items: center;
  min-width: 200px;
  img
  {
    
    width:100%;
    height: 100%;
    object-fit: contain;
  }
`
const Controls=styled.div`
        display: flex;
        margin-left: 60px;
        align-items: center;
`
const PlayButton=styled.button `
        border-radius:4px ;
        display:flex;
        align-items: center;
        font-size: 15px;
        height: 60px;
        padding: 0px 24px;
        margin-right: 22px;
        border:none;
        cursor: pointer;
        box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  span{
      color:black;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    &:hover
    {
      background-color: rgba(249,249,249,0.8);
    }
`

const TrailerButton=styled(PlayButton) `
    border: 1px solid white;
    background-color:rgba(90,90,90,0.8);
  span {
      color: white;
    }
  &:hover
  {
    background-color:rgba(90,90,90,0.5);
  }
`

const AddButton=styled.button `
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      background-color:rgba(60,60,60,1);
      border: 2px solid white;
      border-radius: 50%;
      cursor: pointer;
      margin-right: 20px;
      box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  &:hover
      {
        background-color:rgba(60,60,60,0.5);
      }
`
const GroupWatchButton=styled(AddButton) `
      display: flex;
      justify-content: center;
      margin-left: 5px;
`

const SubTitle=styled.div`
  display: flex;
  padding:20px 60px 0px;
`
const Description=styled(SubTitle)`
  max-width: 40vw;
  text-align: justify;
  line-height: 1.5;

`


//#endregion