import React from "react";

import styles from "../styles/index.module.css";

// import custom components
import Header from "../components/Header";
import Footer from "../components/Footer";

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
                        community by building creative and innovative solutions.
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

            <div className={styles.activityDesc}>
                <img src="/hero_desc.jpg" alt="Activity Description" />
                <p>
                    TiC aims a providing Cameroonian students with opportunities for self-initiative that are led by their ability to identify, understand and address community challenges with creative and innovative business solution.

                    Over a period of two months, students will solve community challenges while learning tech and some entrepreneurial skills
                </p>
            </div>

            <Footer />
        </>
    )
}

export default HomePage;