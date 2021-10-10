//rsf
import React from 'react';
import styled from "styled-components";

function Login() {
    return (
        <Container>
            <CTA>
                <FirstLogo src="/images/cta-logo-one.svg"/>
                <SignupButton>
                    get the disney bundle
                </SignupButton>
                <Terms>
                    By Clicking, You Agree with our <a href="/">Terms of Conditions</a> and <a href="/">Privacy Policy</a>
                </Terms>
            </CTA>

        </Container>
    );
}

export default Login;

//#region Styling

const Container = styled.div `
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  &:before{
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url("/images/login-background.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
  }

`

const CTA = styled.div `
  max-width: 650px;
  width: 70%;
  padding: 80px 40px;
 
`
const FirstLogo=styled.img``
const SignupButton=styled.button `
    text-transform: uppercase;
    color: white;
    background-color: #0063e5;
    border-radius: 10px;
    font-size: 20px;
    width: 100%;
    padding: 15px 0px;
    letter-spacing: 2px;
  cursor: pointer;
  border:none;
  
  &:hover
  {
    background-color: rgba(0,99,229,0.8);
  }
`
const Terms=styled.div`
  text-align: center;
  padding-top: 3px;
`

//#endregion