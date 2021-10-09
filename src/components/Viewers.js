import React from 'react'
import styled from 'styled-components'

function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" alt=""/>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" alt=""/>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" alt=""/>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" alt=""/>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" alt=""/>
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
    

`
const Wrap=styled.div `
 
    border:3px solid rgba(249,249,249,0.1);
    border-radius:10px;
    margin-top:20px;
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor:pointer;
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

    }
`
