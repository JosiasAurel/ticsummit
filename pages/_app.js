import React from "react";
import "../style/global.css";

const App = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

export default App;
