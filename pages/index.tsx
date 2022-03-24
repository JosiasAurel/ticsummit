import React from "react";

import styles from "../styles/index.module.css";

// import custom components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Special from "../components/Special";
import StayInTouch from "../components/StayInTouch";

// import content
import { heroText, specials, about } from "../content/index";

import Link from "next/link";

const HomePage: React.FC = (): JSX.Element => {
    const [screenWidth, setScreenWidth] = React.useState<number>(0);
    // special image
    const [specialImage, setSpecialImage] =
        React.useState<string>("/cam_largest.jpg");
    const specialImageEl = React.useRef(null);

    // getting the device screen width when component mounts
    React.useEffect(() => {
        setScreenWidth(window.innerWidth);
    });
    return (
        <>
            <head>
                <title>TiC - Learn to Build, Build to Serve</title>
            </head>
            <Header />
            <main className={styles.topMain}>
                <img loading="lazy" src="/fun_training.jpg" alt="training" />
                <div className={styles.topCTA}>
                    <h1>Building the next generation of African innovators</h1>
                    <p>{heroText}</p>
                    <a href="https://forms.gle/Tq2cyn264GYrQc4m9">
                        <Button>Apply Now</Button>
                    </a>

                </div>
            </main>

            <div
                style={{
                    margin: "1em",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}
            >
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
                                        if (screenWidth > 500) {
                                            setSpecialImage(v);
                                            specialImageEl.current.classList.add(
                                                "imageMoveUpClass"
                                            );
                                            setTimeout(() => {
                                                specialImageEl.current.classList.remove(
                                                    "imageMoveUpClass"
                                                );
                                            }, 1000);
                                        } else {
                                        }
                                    }}
                                />
                            );
                        })}
                    </div>
                    {screenWidth > 500 ? (
                        <img
                            ref={specialImageEl}
                            className={styles.specialImage}
                            src={specialImage}
                            alt={specialImage.split("_").join(" ")}
                        />
                    ) : (
                        ""
                    )}
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
                    {about.slice(0, 300)}... <br />
                    <Link href="/about">
                        <Button>
                            Read More
                        </Button>
                    </Link>
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
