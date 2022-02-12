import React from "react";
import Button from "./Button";

import styles from "../styles/index.module.css";

const StayInTouch: React.FC = (): JSX.Element => {
    return (
        <div className={styles.stayInTouch}>
            <div>
                <h1>STAY UPDATED</h1>
                <p>
                    Be the first to hear about program application updates, community events & spotlights,
                    courses or just tech news.
                </p>
            </div>
            <form>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="youremail@example.com" />
                <Button type="submit">
                    Sponsor Us Now
                </Button>
            </form>
        </div>
    )
}

export default StayInTouch;