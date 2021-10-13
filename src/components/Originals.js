import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectOriginal} from "../features/movies/movieSlice";
function Originals() {
    const org=useSelector(selectOriginal);
    return (
        <Container>
            <h2>Originals</h2>
            <Content>
                {
                    org &&
                    org.map((origin) =>(
                        <Wrap key={origin.id}>
                            <Link to={`/details/${origin.id}`}>
                                <img src={origin.cardImg}/>
                            </Link>
                        </Wrap>
                    ))
                }

            </Content>
        </Container>
    )
}

export default Originals;

//#region Styling
const Container=styled.div `
    display: flex;
    flex-direction: column;
`
const Content=styled.div `
    display:grid;
    grid-gap:25px;
    
    grid-template-columns:repeat(4,minmax(0,1fr));
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
  border-radius: 10px;
  overflow: hidden;
  border:3px solid rgba(249,249,249,0.1);
  cursor: pointer;
  box-shadow:rgb(0 0 0 / 69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
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
    box-shadow:rgb(0 0 0 / 80%) 0 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    
  }
`
//#endregion