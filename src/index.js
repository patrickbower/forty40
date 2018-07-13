import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';
import netlifyIdentity from 'netlify-identity-widget';
import './index.css';

// jquery
window.jQuery = window.$ = $;

// netlifyIdentity
window.netlifyIdentity = netlifyIdentity;
netlifyIdentity.init();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
