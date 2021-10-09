import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Movies from './Movies'
import Viewers from './Viewers'
function Home() {
    return (
        <Container>
                <ImgSlider />   
                <Viewers />  
                <Movies /> 
        </Container>
    )
}

export default Home


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