import Head from "next/head";
import React from "react";

export function Fonts(): JSX.Element {
    return (
        <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Roboto:wght@100;900&display=swap" rel="stylesheet"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Roboto:wght@100;700&display=swap" rel="stylesheet"/>
        </Head>
    )
}