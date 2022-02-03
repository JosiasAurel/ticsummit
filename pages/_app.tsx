import React from "react";

import "../styles/global.css";

import { AppProps } from "next/app";

const TICApp: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
    return (
        <Component {...pageProps} />
    )
}

export default TICApp;