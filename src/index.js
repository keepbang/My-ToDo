import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import store from './store';

import './css/index.css';

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";

ReactDom.render(
    <Provider store={store}>
        <App></App>
    </Provider>
    ,document.getElementById("root")
);

serviceWorker.unregister();