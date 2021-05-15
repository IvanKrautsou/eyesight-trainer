import React from "react";
import styled from "@emotion/styled";

type SpeedControlProps = {
    value: number;
    onSpeedChange: (val: number) => void;
}

export default function SpeedControl({value, onSpeedChange}: SpeedControlProps): JSX.Element {

    return (
        <Container>
            <TitleContainer>
                Скорость
                <SecondWrapper>{value}</SecondWrapper>
                сек.
            </TitleContainer>
            <ButtonsContainer>
                <MinusBtn onClick={() => (value > 1) && onSpeedChange(value - 0.5)}/>
                <PlusBtn onClick={() => (value < 5) && onSpeedChange(value + 0.5)}/>
            </ButtonsContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 20px;
    width: 708px;
    height: 220px;
    background: #FFFFFF;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 48px;
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 500px;
    font-size: 48px;
`

const SecondWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 126px;
    border: 1px solid #000000;
    border-radius: 20px;
    color: #000000;
`

const ButtonsContainer = styled.div`
    display: flex;
`
const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 92px;
    height: 92px;
    background: #FDD207;
    font-size: 104px;
    line-height: 92px;
    border: none;
    border-radius: 10px;
    margin: 0 10px;
    cursor: pointer;
    font-weight: 600;
    &:active, &:focus {
        outline: none;
    }
`

const MinusBtn = styled(Button)`
    &:after {
        content: '';
        background-color: #0e0c0b;
        width: 50px;
        height: 12px;
    }
`
const PlusBtn = styled(Button)`
    &:after {
        content: '+';
        color: #0e0c0b;
        margin-bottom: 4px;
    }
`