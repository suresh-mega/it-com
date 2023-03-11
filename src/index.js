import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import ServiceV8 from './components/aol-mail-login-support';
import Contact from './components/contact';
import QuickbooksDetails from './components/quickbooks-intuit-support';
import HomeV1 from './components/home-v1';


const customHistory = createBrowserHistory();

class Root extends Component {
    render() {
        return(
            <BrowserRouter history={customHistory} basename="/">
                <Router >
                    <div>
                    <Switch>
                        <Route exact path="/" component={HomeV1} />
                        <Route path="/quickbooks-intuit-support" component={QuickbooksDetails} />
                        <Route path="/aol-mail-login-support" component={ServiceV8} />
                        <Route path="/contact-us" component={Contact} />
                    </Switch>
                    </div>
                </Router>
            </BrowserRouter>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('borex'));
