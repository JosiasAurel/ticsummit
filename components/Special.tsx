
import React from "react";
import styles from "../styles/components.module.css";

type Props = {
    number: number
    description: string
    image?: string
    clickAction?: Function
}

const Special: React.FC<Props> = ({ number, description, clickAction, image }): JSX.Element => {
    const [focused, setFocused] = React.useState<boolean>(false);
    return (
        /* sets the image on the side specials to the image held by the current Special */
        <div style={{
            backgroundColor: focused ? "#f7cb48" : "#235ea0"
        }} onFocus={_ => setFocused(true)} onClick={_ => clickAction(image)} className={styles.specialCard}>
            <h1>
                {number >= 10 ? number : `0${number}`}
            </h1>
            <p>
                {description}
            </p>
        </div>
    )
}

export default Special;