import React from "react";

import Image from "next/image";

const TICLogo: React.FC = (): JSX.Element => {
    return (
        <div style={{
            margin: "0.5em"
        }}>
            <Image src="/logo.png" width="40" height="40" />
        </div>
    )
}

export default TICLogo;