import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';
import './index.css';

// jquery
window.jQuery = window.$ = $;
let url = 'https://api.trello.com/1/client.js?key=bb6807f13b020310a0543a81ebf10765';
$.getScript(url,() => {}).then(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
  registerServiceWorker();
});

