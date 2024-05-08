import React from "react";

function Button(props){

    console.log(props);
    const buttonStyle = {
        backgroundColor: props.tipo === 'primary' ? "green" : "red",
        color: props.tipo === 'primary' ? "#fff" : "#000",
        padding: "10px 20px",
    };

    return(
        <button style={buttonStyle}>{props.titulo}</button>
    )
}

export default Button;