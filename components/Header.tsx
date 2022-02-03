import React from "react";

import TICLogo from "./Logo";

import styles from "../styles/header.module.css";

import Link from "next/link";

const Header: React.FC = (): JSX.Element => {
    return (
        <header className={styles.header}>
            <TICLogo />

            <nav className={styles.navLinks}>
                <Link href="/blog">
                    <a className={styles.headerNavLink}>Blog</a>
                </Link>
                <Link href="/events">
                    <a className={styles.headerNavLink}>Events</a>
                </Link>
                <Link href="/hackathons">
                    <a className={styles.headerNavLink}>Hackathons</a>
                </Link>
                <Link href="contact">
                    <a className={styles.headerNavLink}>Get In Touch</a>
                </Link>
            </nav>
        </header>
    )
}

export default Header;