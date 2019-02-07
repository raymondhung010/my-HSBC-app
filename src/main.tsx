/**
 * main.tsx
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const renderer = Component => {
    ReactDOM.render(
        <Component/>,
        document.getElementById('root')
    );
}

renderer(App);