import CollapseGroup from "@geist-ui/react/esm/collapse/collapse-group";
import React from "react";

type Props = {
    action?: Function;
    type?: "button" | "submit" | "reset";
    variant?: "blue" | "yellow"
};
const Button: React.FC<Props> = ({ children, action, type, variant }): JSX.Element => {
    return (
        <button
            type={type}
            style={{
                borderRadius: "50px",
                color: "black",
                backgroundColor: variant === "blue" ? "#235ea0" : "#f7cb48",
                border: "solid transparent",
                padding: "1em 2.5em",
                fontWeight: "bolder",
            }}
            onClick={(e) => action(e)}
        >
            {children}
        </button>
    );
};

export default Button;
