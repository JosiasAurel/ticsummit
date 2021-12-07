import React from "react";

import Image from "next/image";

const TICLogo: React.FC = (): JSX.Element => {
    return (
        <div>
            <Image src="/TIC.png" width="50" height="50" />
        </div>
    )
}

export default TICLogo;