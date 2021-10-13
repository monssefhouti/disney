import React from 'react'
import styled from 'styled-components'

function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" alt=""/>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/disney.mp4" type="video/mp4"/>
                </video>


            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" alt=""/>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/marvel.mp4" type="video/mp4"/>
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" alt=""/>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/pixar.mp4" type="video/mp4"/>
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" alt=""/>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/starwars.mp4" type="video/mp4"/>
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" alt=""/>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/nationalgeographic.mp4" type="video/mp4"/>
                </video>
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container =styled.div `
    margin-top:30px;
    margin-bottom:50px;
    display:grid;
    grid-gap:25px; // space between columns
    grid-template-columns:repeat(5,minmax(0,1fr));

  @media screen and (max-width:900px) and (min-width:768px)
  {
    grid-template-columns:repeat(2,minmax(0,1fr));
  }
  @media screen and (max-width:1052px)
  {
    grid-template-columns:repeat(2,minmax(0,1fr));
  }
    

`
const Wrap=styled.div `
 
    border:3px solid rgba(249,249,249,0.1);
    border-radius:10px;
    margin-top:20px;
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor:pointer;
    position: relative;
    display: flex;
    img
    {
      
      width:100%;
      height:100%;
      object-fit:cover; //  fit out the object is much of possible inside the div 
    }

    //& means concat the hover to the parent such as wrap:hover{}

    &:hover
    {
        transform:scale(1.05);
        border:3px solid white;
        box-shadow:rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transition-duration:1s;
        
        video
        {
          opacity: 1;
          z-index: -1;
        }
    }
  video
  {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    opacity: 0;
  }

`