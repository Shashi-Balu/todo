import React, { useEffect } from "react";

function Rainbow() {
    const colors = ["red", "green", "yellow", "pink"];
    const randomColor = Math.floor(Math.random() * 2);

    useEffect(() => {
        console.log(colors[randomColor]);
    }, [randomColor]);

    return <div>{randomColor}</div>;
}

export default Rainbow;
