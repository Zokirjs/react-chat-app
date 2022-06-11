import React from "react";
import style from "styled-components";
import logo from "../assets/logo.png";

function Login() {
    return <LoginDiv>
            <LoginContainer>
                <LoginLogo src={logo} alt="logo" />
            </LoginContainer>
        </LoginDiv >
}

const LoginDiv = style.div`
    display: flex;
    flex-direction: column;
    background-color: #3498db;
    height: 100vh;
    margin: auto;
    align-items: center;
    justify-content: center;
`;
const LoginContainer = style.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f3f3f3;
    border-radius: 5px;
    box-shadow: 0px 0px 60px #f3f3f3;
    width: 500px;
    height: 300px;
`;
const LoginLogo = style.img`
    width: 100px;
    height: 100px;  
`


export default Login;