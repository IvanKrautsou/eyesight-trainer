import React, {useEffect, useRef, useState} from "react";
import {GameOptions} from "../pages";
import {library} from "../public/words";
import {chooseWords, getParts} from "./game-utils";
import {GameContainer, TILDA_SIZE, Tilde, WordContainer, WordPartOne, WordPartTwo} from "./Game.styles";

type GameProps = {
    options: GameOptions,
    onEnd: () => void,
}

export default function Game({options: {speed, lettersAmount, wordsAmount, startDistance, increaseDistance}, onEnd}: GameProps): JSX.Element {

    const [partOne, setPartOne] = useState('')
    const [partTwo, setPartTwo] = useState('')
    const [distance, setDistance] = useState(startDistance + TILDA_SIZE / 2)
    const distanceRef = useRef(distance)
    distanceRef.current = distance

    const play = (words: string[], iterationsLeft: number) => {
        if (iterationsLeft < 0) {
            return onEnd();
        }
        const [partOne, partTwo] = getParts(words[iterationsLeft]);
        setPartOne(partOne);
        setPartTwo(partTwo);
        setDistance(distanceRef.current + increaseDistance)
        setTimeout(play.bind(null, words, iterationsLeft - 1), speed * 1000);
    };

    useEffect(() => {
        const words: string[] = chooseWords(library, wordsAmount, lettersAmount);
        play(words, words.length - 1);
    }, []);

    return (
        <GameContainer>
            <WordContainer>
                <WordPartOne distance={distance}>{partOne}</WordPartOne>
                <Tilde>~</Tilde>
                <WordPartTwo distance={distance}>{partTwo}</WordPartTwo>
            </WordContainer>
        </GameContainer>
    )
}