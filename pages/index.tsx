import React, {useState} from "react";
import styled from '@emotion/styled'
import GameSetting from "../components/GameSetting";
import Game from "../components/Game"
import EndedGame from "../components/EndedGame";

export type GameOptions = {
    wordsAmount: number;
    startDistance: number;
    lettersAmount: number;
    increaseDistance: number;
    speed: number;
}

enum Step { Settings, Game, End }

const END_REFRESH_TIME = 3000

export default function Home(): JSX.Element {

    const [options, setOptions] = useState<GameOptions | null>(null)
    const [step, setStep] = useState<Step>(Step.Settings)

    function startGame(options: GameOptions) {
        setOptions(options)
        setStep(Step.Game);
    }

    function endGame() {
        setOptions(null)
        setStep(Step.End);
        setTimeout(() => setStep(Step.Settings), END_REFRESH_TIME)
    }

    function GameStep() {
        switch (step) {
            case Step.Settings:
                return <GameSetting onStart={startGame}/>
            case Step.Game:
                if (options) {
                    return <Game options={options} onEnd={endGame}/>
                }
                break;
            case Step.End:
                return <EndedGame/>
        }
        return null;
    }


    return (
        <MainContainer>
            <GameStep/>
        </MainContainer>
    )
}

const MainContainer = styled.div`
        font-family: Roboto, sans-serif;
        font-weight: bold;
        color: #371548;
    `
