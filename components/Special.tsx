
import React from "react";
import styles from "../styles/components.module.css";

type Props = {
    number: number
    description: string
}

const Special: React.FC<Props> = ({ number, description }): JSX.Element => {
    return (
        <div className={styles.specialCard}>
            <h1>
                {number}
            </h1>
            <p>
                {description}
            </p>
        </div>
    )
}

export default Special;