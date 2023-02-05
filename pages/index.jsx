import React from "react";
import { ticSummitInfoText, detailedInfos, faq } from "../constants.js";

const LandingPage = () => {

    React.useEffect(() => {
        const $ = (id) => document.getElementById(id);

        const header = $("header");
        header.style.visibility = "hidden";

        // intersection observer options
        let options = {
            root: null, // use browser viewport
            threshold: 0.2,
            rootMargin: "0px",
        };

        function handler(entries, observer) {
            const header = $("header");
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    header.style.opacity = 0;
                } else header.style.opacity = 1;
            });

            // alert("No longer viewing registration button");
        }

        let target = $("main");
        let observer = new IntersectionObserver(handler, options);

        observer.observe(target);
    }, []);
    return (
        <div className="landingPage">
            <header id="header">
                <h2>Summit 2023</h2>
                <button id="register-btn">Register Now</button>
            </header>
            <main
                id="main"
                style={{
                    margin: "0 0.5em",
                }}
            >
                <div>
                    <h1
                        style={{
                            fontSize: "3em",
                            textAlign: "start",
                            margin: "0 0.8em",
                        }}
                    >
                        The future depends on you...
                        <br /> you got the potential <br /> <em>to mold it!</em>
                    </h1>
                </div>
                <span
                    style={{
                        marginTop: "1.4em",
                    }}
                >
                    <p
                        style={{
                            textAlign: "center",
                            fontSize: "1.7em",
                        }}
                    >
                        From <strong>April 2 - 4</strong>, come unleash your
                        creativity <br /> and win amazing prizes.
                    </p>
                </span>

                <button id="register-btn">Register Now</button>
            </main>

            <div
                id="obs"
                style={{
                    margin: "0 1.3em",
                }}
            >
                <h2>What is TiC Summit?</h2>
                {ticSummitInfoText.split("---").map((msg) => (
                    <>
                        <p> {msg} </p>
                    </>
                ))}
                <br />
                <h2>2023 Application deadline: March 15th</h2>
            </div>

            <div
                style={{
                    margin: "0 1.3em",
                }}
            >
                {Object.keys(detailedInfos).map((info) => (
                    <>
                        <h2>{info}</h2>
                        <ul>
                            {detailedInfos[info].map((item) => (
                                <li>{item}</li>
                            ))}
                        </ul>
                    </>
                ))}
            </div>

            <div
                style={{
                    margin: "0 1.3em",
                }}
            >
                <h2>Frequently asked questions (FAQ)</h2>
                {faq.map((qa) => (
                    <>
                        <p>
                            <b>Question</b>: {qa.q}
                        </p>
                        <p>
                            <b>Answer</b>: {qa.a}
                        </p>
                    </>
                ))}
            </div>
            <footer>
                <a href="">Facebook</a>
                <a href="">Twitter</a>
                <a href="">Instagram</a>
            </footer>
        </div>
    );
};

export default LandingPage;
