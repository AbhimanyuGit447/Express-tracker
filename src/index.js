import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "./context/context";
import {SpeechProvider} from "@speechly/react-client";


import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId = "49737241-0f1b-4df6-8c6f-01a72b70f933" language = "en-US">
    <Provider>
        <App />
    </Provider>
    </SpeechProvider>,
  document.getElementById('root'),
);