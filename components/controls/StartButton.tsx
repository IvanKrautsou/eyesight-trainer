import React from "react";
import styled from "@emotion/styled";

type ButtonProps = {
    onClick: () => void;
}

export const StartButton = ({onClick}: ButtonProps): JSX.Element => (
    <Container>
        <Button onClick={onClick}>СТАРТ</Button>
    </Container>
)

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    width: 708px;
    height: 220px;
`

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 389px;
    height: 109px;
    background: #FDD207;
    color: #371548;
    font-family: Roboto, sans-serif;
    font-weight: bold;
    font-size: 49px;
    border: none;
    border-radius: 81px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    cursor: pointer;
    
    &:active, &:focus {
        outline: none;
    }
`