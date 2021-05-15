import React, {useState} from "react";
import SliderControl from "./controls/SliderControl";
import SpeedControl from "./controls/SpeedControl";
import {StartButton} from "./controls/StartButton";
import {GameOptions} from "../pages";
import styled from "@emotion/styled";

type Props = {
    onStart: (settings: GameOptions) => void;
}

export default function GameSetting({onStart}: Props): JSX.Element {

    const [wordsAmount, setWordsAmount] = useState(6)
    const [startDistance, setStartDistance] = useState(25)
    const [lettersAmount, setLettersAmount] = useState(8)
    const [increaseDistance, setIncreaseDistance] = useState(25)
    const [speed, setSpeed] = useState(1)

    return (
        <Container>
            <Title>Тренажер «Поле зрения»</Title>
            <Grid>
                <SliderControl title={"Сколько слов"} min={1} max={10} step={1} value={wordsAmount}
                               onChange={setWordsAmount}/>
                <SliderControl title={"Стартовое расстояние"} min={5} max={40} step={5} value={startDistance}
                               onChange={setStartDistance}/>
                <SliderControl title={"Сколько букв в словах"} min={3} max={12} step={1} value={lettersAmount}
                               onChange={setLettersAmount}/>
                <SliderControl title={"Увеличение расстояния"} min={5} max={40} step={5} value={increaseDistance}
                               onChange={setIncreaseDistance}/>
                <SpeedControl value={speed} onSpeedChange={setSpeed}/>
                <StartButton
                    onClick={() => onStart({wordsAmount, startDistance, lettersAmount, increaseDistance, speed})}/>
            </Grid>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.div`
  font-size: 64px;
  align-self: center;
  color: #2B3172;
  margin-top: 116px;
`

const Grid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1650px;
  margin-top: 158px;
`

