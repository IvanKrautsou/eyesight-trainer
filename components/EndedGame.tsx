import React from "react";
import Image from 'next/image'
import styled from "@emotion/styled";

export default function EndedGame(): JSX.Element {
    return (
        <Container>
            <Image
                src="/end-game.png"
                alt="Picture"
                width={464}
                height={532}
            />
            <Text>Отличная работа!</Text>
        </Container>
    )
}

const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        justify-content: center;
    `

const Text = styled.div`
        font-size: 64px; 
        color: #2B3172;
`