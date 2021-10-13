import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectNewDisney, selectRecommends} from "../features/movies/movieSlice";
function NewDisney() {
    const newdisney=useSelector(selectNewDisney);
    console.log(newdisney);
    return (
        <Container>
            <h2>New to Disney +</h2>
            <Content>
                {
                    newdisney &&
                    newdisney.map((newD) =>(
                            <Wrap key={newD.id}>
                                <Link to={`/details/${newD.id}`}>
                                    <img src={newD.cardImg}/>
                                </Link>
                            </Wrap>
                        ))
                }

            </Content>
        </Container>
    )
}

export default NewDisney;

//#region Styling
const Container=styled.div `
    
`
const Content=styled.div `
    display:grid;
    grid-gap:24px;
    margin-bottom: 10px;
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
const Divider=styled.div`
    width: 40vw;
    border: 2px solid whitesmoke;
    display: flex;
    margin-left: 25vw;
    margin-top: 20px;
`
//#endregion