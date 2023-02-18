import React from "react";
import { ticSummitInfoText, detailedInfos, faq, whatTic, organizers, sponsors } from "../constants.js";
import CountDown from "../components/counter.jsx";
import Organizer from "../components/organizer.jsx";
import Script from "next/script.js";

const LandingPage = () => {

    return (
        <div>
            <head>
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/tilt.js/1.2.1/tilt.jquery.min.js" />
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js" integrity="sha512-STof4xm1wgkfm7heWqFJVn58Hm3EtS31XFaagaa8VMReCXAkQnJZ+jEy8PCC/iT18dFy95WcExNHFTqLyp72eQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </head>
            <main>
                <div className="hero-cover">
                    <h1>Learn to Build, Build to serve.</h1>
                    <h2>Tech Innovative Club presents <br /> <br /> <em>TiC Summit 2023</em></h2>

                    <br />
                    <h1>Happening April 29, 2023</h1>
                    <br />
                    <button>Register</button>
                </div>
                <div className="hero-filler"></div>
            </main>
            <div className="scroll-cta"><img src="/mouse.svg" /></div>
            <div className="main-content">
                <div

                    className="info-1">
                    <div className="text-1">
                        <h1>What is TiC Summit?</h1>
                        <p>{whatTic}</p>
                    </div>
                    <div>
                        <img src="/shower1.jpg" />
                    </div>
                </div>

                <div className="info-1">
                    <div className="text-1">

                        <h1>Why participate?</h1>
                        <ul>
                            <li>
                                You get the chance to learn design-thinking, and sharpen your ability to identify and greatly design solutions to problems your community faces.
                            </li>
                            <li>
                                Join a community of like-minded and amazing teenagers, connect and build together.
                            </li>
                            <li>
                                Stickers, swag and free internet ;)
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img src="/shower2.jpg" />
                    </div>
                </div>

                <div>
                    <h1>Frequently asked questions (FAQ)</h1>
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
            </div>

            <div className="cta3">
                <h1>What are you waiting for?</h1>
                <button>Come have fun!</button>
                <br />
                <img src="/cta3.jpg" />
                <p>Our friend, Henry, performing at his best {"<3"} </p>

            </div>

            <div style={{
                margin: "2em",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center"
            }}>
                <h2>Organizers</h2>
                <h3>Made by teens, for teens!</h3>
                <div className="org-grid">
                    {organizers.map(organizer => (
                        <Organizer
                            name={organizer.name}
                            image={organizer.image}
                            role={organizer.role}
                        />
                    ))}
                </div>
            </div>

            <div style={{
                margin: "2em",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center"
            }}>
                <h1>Sponsors</h1>
                <div>
                    {sponsors.map(sponsor => (
                        <img style={{ margin: "0.5em" }} src={sponsor} />
                    ))}
                </div>
            </div>

            <footer>
                <a href="">Facebook</a>
                <a href="">Twitter</a>
                <a href="">Instagram</a>
            </footer>

        </div>
    )
};

export default LandingPage;
