import React from "react";
import {getRange} from "../game-utils";
import {Container, Input, NumberWrapper, Scale, Title} from "./SliderControl.styles";

type SliderProps = {
    title: string;
    min: number;
    max: number;
    step: number;
    value: number;
    onChange: (value: number) => void;
};

export default function SliderControl({title, min, max, step, value, onChange}: SliderProps): JSX.Element {
    const listItems = getRange(min, max, step).map((number) =>
        <NumberWrapper key={number.toString()}>{number}</NumberWrapper>
    );

    return (
        <Container>
            <Title>{title}</Title>
            <Scale>{listItems}</Scale>
            <Input type='range' min={min} max={max} step={step} value={value}
                   onChange={e => onChange(Number.parseInt(e.target.value))}/>
        </Container>
    )
}
