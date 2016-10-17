import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
//ReactDOM.render(<App />, document.getElementById('app'));

ReactDOM.render(
    (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="home" component={Home}/>
                <Route path="about" component={About}/>
                <Route path="contact" component={Contact}/>
            </Route>
        </Router>
    ), document.getElementById('app')
);