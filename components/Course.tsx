
import React from "react";

import Button from "./Button";

import styles from "../styles/components.module.css";

type Props = CourseInfo;

const Course: React.FC<Props> = ({ image, title, url }): JSX.Element => {
    return (
        <div className={styles.Course}>
            <img src={image} alt={title} />
            <h2>
                {title}
            </h2>
            <Button action={() => alert("Course Coming Soon")}>
                Enroll
            </Button>
        </div>
    )
}

export default Course;