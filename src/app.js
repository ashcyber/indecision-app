import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

/*
    Main JS application file that calls the IndecisionApp 
    component to render on the application under div of id 'app'. 
    The application structure of the js files is component based. 
    so it consist of Options component & stateless components such as Header. 
*/

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
