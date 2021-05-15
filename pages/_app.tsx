import React from "react";
import {AppProps} from 'next/app'
import '../styles/globals.css'
import {Fonts} from "../styles/fonts";
import Image from "next/image";
import styled from "@emotion/styled";

export default function App({Component, pageProps}: AppProps): JSX.Element {
    return (
        <React.Fragment>
            <Fonts/>
            <Logo>
                <Image
                    src="/school-logo.png"
                    alt="Picture"
                    width={338}
                    height={135}
                />
            </Logo>
            <Component {...pageProps} />
        </React.Fragment>
    )
}

const Logo = styled.div`
    position: absolute;
    top: 86px;
    right: 55px;
`
