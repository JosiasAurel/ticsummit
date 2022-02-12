import React from "react";

import styles from "../styles/index.module.css";

// import custom components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Special from "../components/Special";
import StayInTouch from "../components/StayInTouch";

// import content
import { heroText, specials } from "../content/index";

const HomePage: React.FC = (): JSX.Element => {
    // special image
    const [specialImage, setSpecialImage] =
        React.useState<string>("/cam_largest.jpg");
    const specialImageEl = React.useRef(null);

    return (
        <>
            <head>
                <title>TiC - Learn to Build, Build to Serve</title>
            </head>
            <Header />
            <main className={styles.topMain}>
                <img loading="lazy" src="/fun_training.jpg" alt="training" />
                <div className={styles.topCTA}>
                    <h1>About the Program</h1>
                    <p>{heroText}</p>
                    <Button>Sponsor Us Now</Button>
                </div>
            </main>

            <div style={{ margin: "1em" }}>
                <h1>What Makes TiC Special ?</h1>
                <div className={styles.specialsCtn}>
                    <div>
                        {specials.map((special, idx) => {
                            return (
                                <Special
                                    number={idx + 1}
                                    description={special.content}
                                    image={special.image}
                                    clickAction={(v: string) => {
                                        setSpecialImage(v);
                                        specialImageEl.current.classList.add(
                                            "imageMoveUpClass"
                                        );
                                        setTimeout(() => {
                                            specialImageEl.current.classList.remove(
                                                "imageMoveUpClass"
                                            );
                                        }, 1000);
                                    }}
                                />
                            );
                        })}
                    </div>
                    <img
                        ref={specialImageEl}
                        className={styles.specialImage}
                        src={specialImage}
                        alt={specialImage.split("_").join(" ")}
                    />
                </div>
            </div>
            <div>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div style={{ width: "80%" }}>
                        <iframe
                            style={{
                                border: "solid transparent",
                                borderRadius: "4px",
                            }}
                            width="100%"
                            height="415"
                            src="https://youtube.com/embed/8GbabdQT6RQ"
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className={styles.activityDesc}>
                <img
                    loading="lazy"
                    src="/hero_desc.jpg"
                    alt="Activity Description"
                />
                <p>
                    TiC aims a providing Cameroonian students with opportunities
                    for self-initiative that are led by their ability to
                    identify, understand and address community challenges with
                    creative and innovative business solution. Over a period of
                    two months, students will solve community challenges while
                    learning tech and some entrepreneurial skills
                </p>
            </div>

            <div>
                <StayInTouch />
            </div>

            <Footer />
        </>
    );
};

export default HomePage;
