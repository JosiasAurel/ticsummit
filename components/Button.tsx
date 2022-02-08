import CollapseGroup from "@geist-ui/react/esm/collapse/collapse-group";
import React from "react";

type Props = {
    text: string
    action?: Function
}
const Button: React.FC<Props> = ({ text, action }): JSX.Element => {
    return (
        <button style={{
            borderRadius: "50px",
            color: "black",
            backgroundColor: "#F7CB48",
            border: "solid transparent",
            padding: "1em 2.5em",
            fontWeight: "bolder"
        }} onClick={e => action(e)}>
            {text}
        </button>
    )
}

export default Button;