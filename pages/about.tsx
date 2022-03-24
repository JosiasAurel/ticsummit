
import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

import styles from "../styles/components.module.css";
import { about } from "../content/index";

import Image from "next/image";

const AboutPage: React.FC = (): JSX.Element => {
    return (
        <div>
            <Header />
            <h1 style={{
                textAlign: "center"
            }}>About TiC</h1>
            <div style={{
                margin: "4em 10%"
            }}>
                <div className={styles.about__block}>
                    <Image loading="lazy" src="/s1.jpg" width={1000} height={600} />
                    <p>
                        Cameroonian students in the secondary schools are talented. We know this first hand. TiC is the perfect platform for young students to express their creativity and abilities to innovate.
                    </p>
                </div>

                <div className={styles.about__block}>
                    <Image loading="lazy" src="/s2.jpg" width={1000} height={600} />
                    <p>
                        We're inspiring the next generation of technology entrepreneurs. Over a period of one month, our young innovators will learn from our mentors and trainers, through our online training program and rich curriculum.
                    </p>
                </div>

                <div className={styles.about__block}>
                    <Image loading="lazy" src="/s3.jpg" width={1000} height={600} />
                    <p>
                        At the end of the one-month training program, we will select the best teams/projects to participate in a three-day summit in Yaounde. Selected participants will learn from some of nations young and talented technology entrepreneurs, during special workshops organized at the major technology centers in the city of Yaoundé.

                        Innovation Centers like the National Polytechnique Yaoundé Laboratory, Ongola Fablabs, the ICT-University Cameroon -  are all on the menu.

                        The experience will be career changing for all our participants, full of inspiration and learning.
                    </p>
                </div>

                <div className={styles.about__block}>
                    <Image loading="lazy" src="/s4.jpg" width={1000} height={600} />
                    <p>
                        Our three-day summit closes with a unique award Ceremony, which will be dignified by some of the major Tech stakeholders in the country. Cash prizes will be awarded to the very best projects at this award ceremony.
                    </p>
                </div>
            </div>
            <div className={styles.about__registerBlock}>
                <Image loading="lazy" src="/s4.jpg" width={1000} height={600} />
                <p style={{ textAlign: "center" }}>
                    Register today with your team and your solution.

                    <br />
                    Together, let's build the future we desire.
                </p>
                <a href="https://forms.gle/Tq2cyn264GYrQc4m9">
                    <Button variant="blue">
                        Register and Make a Change 👋
                    </Button>
                </a>
            </div>
            <Footer />
        </div>
    )
}

export default AboutPage;