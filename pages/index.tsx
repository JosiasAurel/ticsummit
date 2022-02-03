import React from "react";

import styles from "../styles/index.module.css";

// import custom components
import Header from "../components/Header";

const HomePage: React.FC = (): JSX.Element => {
    return (
        <>
            <head>
                <title>TiC - Learn to Build & Build to Serve</title>
            </head>
            <Header />
            <main className={styles.topMain}>
                <div className={styles.heroText}>
                    <h1>
                        TiC empowers young minds to address problems in their
                        community using their creative and innovative solutions.
                    </h1>
                </div>
                <div>

                </div>
            </main>

            <div>
                <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ width: "80%" }}>
                        <iframe style={{ border: "solid transparent", borderRadius: "4px" }} width="100%" height="415"
                            src="https://youtube.com/embed/8GbabdQT6RQ">
                        </iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;