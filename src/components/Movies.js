import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
            <h4>Recommended for you </h4>
            <Content>
                <Wrap>
                    <img src="/images/movie1.jpg" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="/images/movie2.jpg" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="/images/movie3.jpg" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="/images/movie4.jpg" alt=""/>
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies

const Container=styled.div `  
`
const Content=styled.div `
    display:grid;
    grid-gap:25px;
    grid-template-columns:repeat(4,minmax(0,1fr));

`

const Wrap=styled.div `
 /*
    border:3px solid rgba(249,249,249,0.1);
    border-radius:10px;
    margin-top:20px;
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor:pointer;
    /*
    img
    {
       width:100%;
       height:100%;
       object-fit:cover;
    }

    //& means concat the hover to the parent such as wrap:hover{}

    &:hover
    {
        

    }
    
`