import React from "react";
// import icons
import { Twitter, Facebook, Linkedin } from "@geist-ui/react-icons";
import styles from "../styles/footer.module.css";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__top}>
                <div className="flex-col">
                    <h3>Eligibility Criteria</h3>
                    <ul className={styles.criteria}>
                        <li>Must be a student residing in Cameroon</li>
                        <li>Age between 13 and 20</li>
                        <li>
                            Be passionate about solving problems in your
                            community
                        </li>
                    </ul>
                </div>
                <div className="flex-col">
                    <h3>Useful Links</h3>
                    <ul className={styles.pageNav}>
                        <li>
                            <a href="#">Apply for the event</a>
                        </li>
                        <li>
                            <a href="#">Hackathons</a>
                        </li>
                        <li>
                            <a href="/blog">Blog</a>
                        </li>
                        <li>
                            <a href="/contact">Get In Touch</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Offices</h3>
                    <p>Montee Sciences, Yaounde, Cameroon</p>
                    <p>
                        <a href="tel:237679364294">+(237) 679364294</a>
                    </p>
                </div>
            </div>
            <nav className={styles.socialNav}>
                <a href="https://twitter.com/tic_summit">
                    <Twitter />
                </a>
                <a href="https://www.facebook.com/TiCsummit">
                    <Facebook />
                </a>
                <a href="#">
                    <Linkedin />
                </a>
            </nav>
        </footer>
    );
};

export default Footer;
