import { createGlobalStyle } from 'styled-components';



export const GlobalStyle = createGlobalStyle `

    :root {
        --primary: #d81e5b;
        --secondary: #8c38ff;
        --dark: #131a26;
        --light: #ada0b0;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans';
    }

    body {
        background-color: var(--light);
        color: #fff;
    }

    .app {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
    }

    .calculadora {
        width: 100%;
        max-width: 400px;
        background-color: #fff;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0px 2px 64px 1px rgba(232, 100, 1, 0.2);
    }

    .display {
        padding: 16px;
        text-align: right;
        font-size: 24px;
        font-weight: 300;
        background-color: var(--dark);
    }

    .display span {
        font-size: 16px;
        color: #89CFF0;
    }

    button {
        appearance: none;
        border: none;
        outline: none;
        color: #fff;
        font-size: 20px;
        padding: 16px;
        cursor: pointer;
        transition: 0.4;
    }

    button:hover {
        opacity: 0.9;
    }

    .operadores {
        display: flex;
    }

    .operadores button {
        flex: 1 1 0%;
        background-color: var(--primary);
        font-weight: 700;
    }

    .operadores .clearAll {
        background-color: var(--secondary);
    }

    .key {
        display: flex;
        flex-wrap: wrap;
    }

    .key button {
        flex: 1 1 33.33%;
        max-width: 33.333%;
        background-color: var(--dark);
    }
`