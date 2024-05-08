import React from "react";
import styled from "styled-components";

const styledButton = styled.button`
    background-color: blue;
    color: #fff;
`;

/*&hover {
    background-color: green;
};*/

const Button = () => {
   return <styledButton>button styled</styledButton>

}

export default Button;