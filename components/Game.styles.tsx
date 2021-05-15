import styled from "@emotion/styled";

export const GameContainer = styled.div`
        display: flex;
        align-items: center;
        min-height: 100vh;
    `

export const WordContainer = styled.div`
        font-size: 60px;
        display: flex;
        position: relative;
        width: 100%;
        font-weight: 900;
        color: #371548;
    `

export const WordPartOne = styled.div<{ distance: number }>`
        padding-right: ${props => props.distance}px;
        width: 50%;
        text-align: right;
    `

export const WordPartTwo = styled.div<{ distance: number }>`
        padding-left: ${props => props.distance}px;
        width: 50%;
        text-align: left;
    `

export const TILDA_SIZE = 107;

export const Tilde = styled.div`
        position: absolute;
        left: calc(50% - ${TILDA_SIZE / 2}px);
        font-size: 170px;
        line-height: 65px;
    `