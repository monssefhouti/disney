import React from 'react'
import styled from 'styled-components'
function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg"/>
            <NavManu>
                <a href="/">
                    <img src="/images/home-icon.svg" alt=""/>
                    <span>Home</span>
                </a>

                <a href="/">
                    <img src="/images/search-icon.svg" alt=""/>
                    <span>Search</span>
                </a>

                <a href="/">
                    <img src="/images/watchlist-icon.svg" alt=""/>
                    <span>WatchList</span>
                </a>

                <a href="/">
                    <img src="/images/original-icon.svg" alt=""/>
                    <span>Originals</span>
                </a>
                <a href="/">
                    <img src="/images/movie-icon.svg" alt=""/>
                    <span>Movies</span>
                </a>
                <a href="/">
                    <img src="/images/series-icon.svg" alt=""/>
                    <span>Tv Shows</span>
                </a>
            </NavManu>

            <UserImg src="/images/profil.png" alt=""/>

            
        </Nav>
    )
}

export default Header


//#region Styling
const Nav = styled.nav `
height:70px;
background-color:#090b13;
display:flex;
align-items:center;
padding:0 36px; // 0 means(top and bottom ) and 36px means(left and right)
overflow-x:hidden;
`
const Logo = styled.img `
width : 80px;

`
const NavManu=styled.div `
    display:flex;
    flex:1;
    margin-left:20px;
    justify-content:center;
a
{
    display:flex;
    text-decoration:none;
    align-items:center;
    padding:0 12px;
    cursor:pointer;
    img
    {
        height:20px;
    }
    span {
        font-size:13px;
        letter-spacing:1.2px;
        text-transform:uppercase;
        position:relative;
        &:after
        {
            content:"";
            height:2px;
            background-color:white;
            position:absolute;
            left:0;
            right:0;
            transform-origin: left center;
            bottom:-6px;
            opacity:0;
            transition:all 250ms cubic-bezier(0.25, 0.46 , 0.45 , 0.94) 0s;
            transform:scaleX(0);
        }
    }
    &:hover
        {
            span:after
            {
                transform:scaleX(1);
                opacity:1;
            }
        }
}
`
const UserImg=styled.img `
    width:50px;
    height:50px;
    border-radius:50%;
    cursor:pointer;
    border:2px solid white;
`

//#endregion