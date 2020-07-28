import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
    }

    :root {
        --primary: #DB202C;
        --black: #000000;
        --blackLighter: #9e9e9e;
        --grayLight: #f5f5f5;
        --grayMedium: #e5e5e5;
        --white: #ffffff;
        --frontEnd: #6bd1ff;
        --backEnd: #00c86f;
    }

    html,
    body {
        margin: 0;
        padding: 0;
    }

    a {
        color: inherit;
    }
`;

export default GlobalStyles;