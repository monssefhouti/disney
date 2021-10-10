import React from 'react';
import styled from "styled-components";
function Details() {
    return (
        <Container>
            <Background>
                <img src="/images/avengersbackground.jpg" />
            </Background>
            <ImgTitle>
                <img src="/images/avangerstitle.png"/>
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
                2019 - Action,Adventures
            </SubTitle>
            <Description>
                Earth's Mightiest Heroes stand as the planet's first line of defense against the most powerful threats in the universe. The Avengers began as a group of extraordinary individuals who were assembled to defeat Loki and his Chitauri army in New York City.
            </Description>
        </Container>
    );
}

export default Details;

//#region Styling
const Container=styled.div `
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
  position: relative;
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
  height:30vh;
  min-height:170px ;
  width: 30vw;
  align-items: center;
  display: flex;
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
  padding:5px 60px 0px;
`
const Description=styled(SubTitle)`
  width: 80vw;
  line-height: 1.5;
  margin-top: 5px;
`


//#endregion