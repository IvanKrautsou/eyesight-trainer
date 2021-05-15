import {shuffle} from "lodash";

export function getParts(word: string): string[] {
    const center = word.length % 2 == 0 ? word.length / 2 : Math.floor(word.length / 2) + Math.round(Math.random());
    const partOne = word.slice(0, center);
    const partTwo = word.slice(center);
    return [partOne, partTwo];
}

export function chooseWords(library: string[], amount: number, wordLength: number): string[] {
    return shuffle(library.filter(word => word.length === wordLength)).slice(0, amount);
}

export function getRange(min: number, max: number, step = 1) {
    let array = [];
    for (let i = min; i <= max; i += step) {
        array.push(i);
    }
    return array;
}