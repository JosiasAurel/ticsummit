import React from "react";

import styles from "../styles/index.module.css";

// import custom components
import Header from "../components/Header";

const HomePage: React.FC = (): JSX.Element => {
    return (
        <>
            <Header />
            <h2>From the 80s...</h2>
        </>
    )
}

export default HomePage;