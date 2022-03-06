import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Course from "../components/Course";
import Head from "next/head";

import styles from "../styles/curriculumn.module.css";
import { courses } from "../content/index";

const CurriculumPage: React.FC = (): JSX.Element => {
    return (
        <div>
            <Head>
                <title>TiC - Curriculumn</title>
            </Head>
            <Header />
            <div className={styles.courriculumnContainer}>
                <div className={styles.curriculumn}>
                    {courses.map(course => {
                        return (
                            <Course
                                title={course.title}
                                image={course.image}
                                url={course.url}
                            />
                        )
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CurriculumPage;