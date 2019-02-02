/**
 * main.tsx
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import App from './App'

const renderer = Component => {
    ReactDOM.render(
        <Component/>,
        document.getElementById('root')
    );
}

renderer(App);