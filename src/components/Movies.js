import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
            <h2>Recommended for You </h2>
            <Content>
                <Wrap>
                    <img src="/images/movie1.jpg" />
                </Wrap>
                <Wrap>
                    <img src="/images/movie2.jpg" />
                </Wrap>
                <Wrap>
                    <img src="/images/movie3.jpg" />
                </Wrap>
                <Wrap>
                    <img src="/images/movie4.jpg" />
                </Wrap>

            </Content>
        </Container>
    )
}

export default Movies;

//#region Styling
const Container=styled.div `  
`
const Content=styled.div `
    display:grid;
    grid-gap:25px;
    grid-template-columns:repeat(4,minmax(0,1fr));

`
const Wrap=styled.div `
  border-radius: 10px;
  overflow: hidden;
  border:3px solid rgba(249,249,249,0.1);
  cursor: pointer;
  box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition-duration: 800ms;
  margin-top: 20px;
  margin-bottom: 10px;
  img
  {
    width: 100%;
    height: 100%;
    object-fit: cover;
    
  }
  &:hover
  {
    transform:scale(1.05);
    border:3px solid white;
    box-shadow:rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    
  }
`

//#endregion