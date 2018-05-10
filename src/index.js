import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//bootstrap import
import './include/bootstrap'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();